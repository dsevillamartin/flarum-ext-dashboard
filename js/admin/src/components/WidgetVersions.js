import { extend } from 'flarum/extend';
import app from 'flarum/app';
import Button from 'flarum/components/Button';

import DashboardSection from 'datitisev/dashboard/DashboardSection';
import ExtensionUpdatesModal from 'datitisev/dashboard/components/ExtensionUpdatesModal';

export default class DashboardWidgetVersions extends DashboardSection {

    content() {

        return(
            <ul>
                <li>{Button.component({
                    children: app.translator.trans('datitisev-dashboard.admin.dashboard.extensionUpdates.checkUpdates_button'),
                    className: 'Button Button--primary',
                    onclick: () => {
                        app.modal.show(new ExtensionUpdatesModal())
                    }
                })}
                </li>
                <li>{app.translator.trans('datitisev-dashboard.admin.dashboard.flarum_version', {version: <strong>{app.forum.attribute('version')}</strong>})}</li>
                <li>{app.translator.trans('datitisev-dashboard.admin.dashboard.php_version', {version: <strong>{app.data.settings['dashboard.phpVersion']}</strong>})}</li>
            </ul>
        )
    }

    className() {
        return "Versions";
    }

}

