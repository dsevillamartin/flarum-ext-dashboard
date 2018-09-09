import Modal from 'flarum/components/Modal';
import Button from 'flarum/components/Button';
import icon from 'flarum/helpers/icon';
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
                <div className="Modal-close App-backControl">
                    {app.extensionSettings[extension.id] &&
                        Button.component({
                            icon: 'fas fa-cog',
                            onclick: () => app.extensionSettings[extension.id](),
                            className: 'Button Button--icon Button--link',
                        })}
                    {Button.component({
                        icon: 'fas fa-times',
                        onclick: this.hide.bind(this),
                        className: 'Button Button--icon Button--link',
                    })}
                </div>

                <div className="DashboardExtensionInfo-Main">
                    <spam className="DashboardExtensionInfoMain-icon" style={extension.icon}>
                        {extension.icon ? icon(extension.icon.name) : ''}
                    </spam>
                    <h3 className="DashboardExtensionInfoMain-title">{extension.extra['flarum-extension'].title}</h3>
                    <span className="DashboardExtensionInfoMain-name">{extension.name}</span>
                    <span className="DashboardExtensionInfoMain-version">{extension.version}</span>
                    <p className="DashboardExtensionInfoMain-description">{extension.description || ' '}</p>
                    <p className="DashboardExtensionInfoMain-useful">
                        <p className="DashboardExtensionInfoMainUseful-author">
                            {extension.authors && extension.authors.length === 1 ? icon('fas fa-user') : icon('fas fa-users')}
                            &nbsp;
                            {extension.authors ? extension.authors.map(e => e.name).join(', ') : 'Unknown'}
                        </p>
                        <p className="DashboardExtensionInfoMainUseful-source">
                            {icon('fas fa-code')}
                            &nbsp;
                            {extension.source ? (
                                <a href={extension.source.url} target="_blank">
                                    Source
                                </a>
                            ) : (
                                'Unknown'
                            )}
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
        );
    }

    isDismissible() {
        return true;
    }

    isEnabled(name) {
        const enabled = JSON.parse(app.data.settings.extensions_enabled);

        return enabled.includes(name);
    }

    toggle(id) {
        const enabled = this.isEnabled(id);

        app.request({
            url: `${app.forum.attribute('apiUrl')}/extensions/${id}`,
            method: 'PATCH',
            data: { enabled: !enabled },
        }).then(() => {
            const enabledArr = JSON.parse(app.data.settings.extensions_enabled);
            if (!enabled) enabledArr.push(id);
            else enabledArr.splice(enabledArr.indexOf(id), 1);

            app.data.settings.extensions_enabled = JSON.stringify(enabledArr);

            m.redraw();
        });
    }
}
