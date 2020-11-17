import Button from 'flarum/components/Button';
import DashboardWidget from 'flarum/components/DashboardWidget';
import icon from 'flarum/helpers/icon';

import ExtensionUpdatesModal from './ExtensionUpdatesModal';
import DashboardExtensionInfoModal from './DashboardExtensionInfoModal';

export default class DashboardWidgetExtensions extends DashboardWidget {
    content() {
        const extensions = app.data.extensions;

        return (
            <div>
                <div className="DashboardExtensions--Title">
                    <span>{app.translator.trans('core.admin.nav.extensions_button')}</span>

                    <Button className="Button" onclick={() => app.modal.show(ExtensionUpdatesModal)}>
                        {icon('fas fa-upload')}
                    </Button>
                </div>

                <div className="DashboardExtensions--List">
                    {Object.values(extensions).map((extension) => (
                        <li
                            className={'DashboardExtensions--Item ' + (this.isEnabled(extension.id) ? 'enabled' : 'disabled')}
                            onclick={() =>
                                app.modal.show(DashboardExtensionInfoModal, {
                                    extension,
                                })
                            }
                        >
                            <div className="DashboardExtensionsItem-content">
                                <spam className="DashboardExtensionsItem-icon" style={extension.icon}>
                                    {extension.icon ? icon(extension.icon.name) : ''}
                                </spam>
                                <label className="DashboardExtensionsItem-title">{extension.extra['flarum-extension'].title}</label>
                            </div>
                        </li>
                    ))}
                </div>
            </div>
        );
    }

    isEnabled(name) {
        const enabled = JSON.parse(app.data.settings.extensions_enabled);

        return enabled.includes(name);
    }

    className() {
        return 'DashboardExtensions';
    }
}
