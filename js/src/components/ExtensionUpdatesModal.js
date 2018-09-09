import Modal from 'flarum/components/Modal';
import app from 'flarum/app';
import PQueue from 'p-queue';
import * as compareVersions from 'compare-versions';

export default class ExtensionUpdatesModal extends Modal {
    init() {
        this.loading = true;
        this.needsUpdate = [];

        this.errors = [];

        this.getPackagesAndVersions();
    }

    className() {
        return 'DashboardSettingsModal ExtensionUpdatesModal Modal--large';
    }

    title() {
        const updates = this.needsUpdate.length;

        if (updates > 0) {
            return app.translator.transChoice('datitisev-dashboard.admin.dashboard.updates.available', { count: updates });
        }

        if (this.loading) {
            return app.translator.trans('datitisev-dashboard.admin.dashboard.updates.checking');
        } else if (updates === 0) {
            return app.translator.trans('datitisev-dashboard.admin.dashboard.updates.none');
        }
    }

    content() {
        return (
            <div className="PermissionGrid container">
                <table className="PermissionGrid" style={!this.errors && this.needsUpdate.length === 0 ? 'display: none' : ''}>
                    <thead>
                        <tr>
                            <th>
                                Extension
                                {this.loading && (
                                    <span>
                                        &nbsp;&nbsp;
                                        <i className="fas fa-circle-notch fa-spin" />
                                    </span>
                                )}
                            </th>
                            <th>Version Installed</th>
                            <th>New Version</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(this.needsUpdate).map(id => {
                            const extension = this.needsUpdate[id];
                            return (
                                <tr className="PermissionGrid-child">
                                    <td>{extension.name}</td>
                                    <td>{extension.oldVersion}</td>
                                    <td>{extension.newVersion}</td>
                                </tr>
                            );
                        })}

                        {this.errors &&
                            this.errors.map(ext => (
                                <tr className="ExtensionUpdatesModal--Error PermissionGrid-child">
                                    <td>{ext.name}</td>
                                    <td>{ext.version}</td>
                                    <td>{ext.error}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
                <div style={this.needsUpdate.length === 0 && !this.errors && !this.loading ? '' : 'display: none'}>
                    <h3>{app.translator.trans('datitisev-dashboard.admin.dashboard.updates.none')}</h3>
                </div>
            </div>
        );
    }

    getPackagesAndVersions() {
        const queue = new PQueue({
            intervalCap: 2,
            interval: 500,
        });
        const extensions = Object.values(app.data.extensions).filter(v => !v.version.startsWith('dev'));

        const promises = extensions.map(extension => () =>
            m
                .request({
                    url: `https://packagist.org/packages/${extension.name}.json`,
                })
                .then(data => {
                    data = data.package;

                    const versions = Object.keys(data.versions)
                        .filter(v => !v.startsWith('dev'))
                        .sort(compareVersions);
                    const latestVersion = versions[versions.length - 1];
                    const version = extension.version;

                    if (latestVersion && version !== latestVersion) {
                        this.extensionUpdates = this.needsUpdate.length + 1;

                        return this.needsUpdate.push({
                            name: extension.name,
                            oldVersion: version,
                            newVersion: latestVersion,
                        });
                    }

                    m.redraw();
                })
                .catch(err => {
                    if (!err || typeof err !== 'object' || !err.message) return false;

                    this.errors.push({
                        name: extension.name,
                        version: extension.version,
                        error: err.status ? `${err.status}: ${err.message}` : err.message,
                    });
                })
        );

        queue.addAll(promises).then(() => (this.loading = false));
    }
}
