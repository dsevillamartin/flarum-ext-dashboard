import Modal from 'flarum/components/Modal';
import icon from 'flarum/helpers/icon';
import saveSettings from 'flarum/utils/saveSettings';
import Switch from 'flarum/components/Switch';

export default class DashboardExtensionInfoModal extends Modal {

    init() {
        super.init();

        this.extension = this.props.extension;
    }

    className() {
        return 'DashboardExtensionInfoModal Modal--large';
    }

    content() {
        const extension = this.extension;
        const isEnabled = this.isEnabled(extension.id);

        return (
            <div className="DashboardExtensionInfo">
                <div className="DashboardExtensionInfo-Main">
                    <spam className="DashboardExtensionInfoMain-icon" style={extension.icon}>
                        {extension.icon ? icon(extension.icon.name) : ''}
                    </spam>
                    <h3 className="DashboardExtensionInfoMain-title">
                        {extension.extra['flarum-extension'].title}
                    </h3>
                    <span className="DashboardExtensionInfoMain-name">
                        {extension.name}
                    </span>
                    <span className="DashboardExtensionInfoMain-version">
                        {extension.version}
                    </span>
                    <p className="DashboardExtensionInfoMain-description">
                        {extension.description || ' '}
                    </p>
                    <p className="DashboardExtensionInfoMain-useful">
                        <p className="DashboardExtensionInfoMainUseful-author">
                            {extension.authors && extension.authors.length == 1 ? icon('user') : icon('users')} {extension.authors ? extension.authors.map(e => e.name).join(', ') : 'Unknown'}
                        </p>
                        <p className="DashboardExtensionInfoMainUseful-source">
                            {icon('code')} {extension.source ? (
                                <a href={extension.source.url} target="_blank">Source</a>
                            ) : 'Unknown'}
                        </p>
                    </p>
                    <div className="DashboardExtensionInfoMain-enabled">
                        {Switch.component({
                            state: isEnabled,
                            children: isEnabled ? 'Enabled' : 'Disabled',
                            onchange: this.toggle.bind(this, extension.id),
                        })}
                    </div>
                </div>
            </div>
        )
    }

    isEnabled(name) {
        const enabled = JSON.parse(app.data.settings.extensions_enabled);

        return enabled.indexOf(name) !== -1;
    }

    toggle(id) {
        const enabled = this.isEnabled(id);

        app.request({
            url: app.forum.attribute('apiUrl') + '/extensions/' + id,
            method: 'PATCH',
            data: {enabled: !enabled}
        }).then(() => {
            const enabledArr = JSON.parse(app.data.settings.extensions_enabled);
            if (!enabled) enabledArr.push(id); else enabledArr.splice(enabledArr.indexOf(id), 1);

            app.data.settings.extensions_enabled = JSON.stringify(enabledArr);

            m.redraw();
        });

    }

}
