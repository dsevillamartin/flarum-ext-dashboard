import Modal from 'flarum/components/Modal';
import app from 'flarum/app';

export default class ExtensionUpdatesModal extends Modal {

    init () {
        this.extensionUpdates = 0;
        this.loading = true;
        this.needsUpdate = [];

        this.error = null;
        this.solution = null;

        this.getPackagesAndVersions();
    }

    className() {
        return 'DashboardSettingsModal ExtensionUpdatesModal Modal--large';
    }
  
    title() {

        if (this.extensionUpdates > 0) {
            return app.translator.trans('datitisev-dashboard.admin.dashboard.extensionUpdates.updatesAvaliable', { number: this.extensionUpdates })
        }
        if (this.error) {
            return app.translator.trans('datitisev-dashboard.admin.dashboard.extensionUpdates.error');
        }

        if (this.loading) {
            return app.translator.trans('datitisev-dashboard.admin.dashboard.extensionUpdates.checking')
        } else if (this.extensionUpdates == 0) {
            return app.translator.trans('datitisev-dashboard.admin.dashboard.extensionUpdates.noUpdates');
        }
    }

    content() {
        return (
            <div className="PermissionGrid container">
                <table className="PermissionGrid" style={this.error || this.extensionUpdates == 0 ? 'display: none' : ''}>
                    <thead>
                    <tr>
                        <th>Extension</th>
                        <th>Version Installed</th>
                        <th>New Version</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Object.keys(this.needsUpdate)
                        .map(id => {
                            const extension = this.needsUpdate[id];
                            return (<tr className="ExtensionList--Item PermissionGrid-child">
                                <td className="ExtensionListItem--Name">{extension.name}</td>
                                <td className="ExtensionListItem--Installed">{extension.oldVersion}</td>
                                <td className="ExtensionListItem--NewVersion">{extension.newVersion}</td>
                            </tr>)
                        })
                    }
                    </tbody>
                </table>
                <div className={this.error ? '' : 'ExtensionUpdatesModal--Error hidden'}>
                    <p>{this.error}</p>
                    <p>{this.solution}</p>
                    <p>{app.translator.trans('datitisev-dashboard.admin.settings.github_createApp')}</p>
                </div>
                <div style={this.extensionUpdates == 0 ? '' : 'display: none'}>
                    <h3>{app.translator.trans('datitisev-dashboard.admin.dashboard.extensionUpdates.noUpdates')}</h3>
                </div>
            </div>
        )
    }

    getPackagesAndVersions() {


            const extensions = app.extensions;
            const extensionNames = Object.getOwnPropertyNames(extensions);


            extensionNames.forEach((el, i, o) => {

                if (!extensions[el] || !extensions[el].source) return false;

                let currentExtension = extensions[el];

                let source = currentExtension.source.url.replace('github.com', 'api.github.com/repos');

                if (source.indexOf('github.com') >= 0) {
                    source = 'https://api.github.com/repos/' + currentExtension.name + '/releases';
                    source += '?client_id=' + app.forum.attribute('datitisev-dashboard.github.client_id') + '&client_secret=' + app.forum.attribute('datitisev-dashboard.github.client_secret');
                } else return false;

                    this.request({
                        url: source,
                        method: 'GET'
                    }).then((data) => {

                        if (this.error) this.error = null;

                        if (data) {
                            let newVersion = (data && data.length) ? data[0].tag_name : null;
                            let version = currentExtension.version;
                            // let version = 'some_other_version';

                            if (newVersion && version != newVersion && version !== 'dev-master' && version != '@dev') {
                                this.extensionUpdates = this.needsUpdate.length + 1;

                                Promise.resolve(this.needsUpdate.push({
                                    name: currentExtension.name,
                                    oldVersion: version,
                                    newVersion: newVersion
                                })).then(() => {
                                    if (o.length - 1 == i) {
                                        this.extensionUpdates = this.needsUpdate.length;
                                        this.loading = false;
                                        m.redraw();
                                    } else {
                                        m.redraw();
                                    }
                                }).catch(error => {
                                    this.error = error;
                                    m.redraw();
                                });
                            } else {
                                this.extensionUpdates = this.needsUpdate.length;
                                if (o.length - 1 == i) {
                                    this.loading = false;
                                    m.redraw()
                                } else {
                                    m.redraw();
                                }
                            }
                        }


                    }).catch((err) => {

                        try {

                            let error = err.message.indexOf('rate limit') >= 0 ? err.message.substr(0, 38) : err.message;
                            let solution = err.message.indexOf('rate limit') >= 0 ? app.translator.trans('datitisev-dashboard.admin.dashboard.extensionUpdates.addClientIdAndSecret') : '';

                            this.error = 'GitHub: ' + error;
                            this.solution = solution;

                            this.loading = false;

                            m.redraw();
                        } catch (err) {
                            console.error(err);
                        }
                    });
            });


            setTimeout(() => {
                this.error = '';
                this.solution = '';
                this.extensionUpdates = 0;
                this.needsUpdate = [];
                this.loading = false;
                m.redraw();
            }, 20000)
    }


    request(par) {

        return new Promise((resolve, reject) => {

            m.request({
                method: par.method ? par.method : "GET",
                url: par.url
            }).then(resolve).catch(reject);

        });


    }


}
