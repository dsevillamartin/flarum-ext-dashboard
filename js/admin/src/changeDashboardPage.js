import { extend } from 'flarum/extend';
import DashboardPage from 'flarum/components/DashboardPage';
import app from 'flarum/app';

import DashboardGraph from 'datitisev/dashboard/components/DashboardGraph';

export default function () {

    DashboardPage.prototype.view = () => {
        
        return (
            <div className="DashboardPage">
                <div className="container">
                    <h2>{app.translator.trans('core.admin.dashboard.welcome_text')}</h2>
                    {new DashboardGraph()}
                    <div className="versions">
                        <ul>
                            <li>{app.translator.trans('datitisev-dashboard.admin.dashboard.flarum_version', {version: <strong>{app.forum.attribute('version')}</strong>})}</li>
                            <li>{app.translator.trans('datitisev-dashboard.admin.dashboard.php_version', {version: <strong>{app.settings['phpVersion']}</strong>})}</li>
                            <li>{app.translator.trans('datitisev-dashboard.admin.dashboard.mysql_version', {version: <strong>{app.settings['mysqlVersion']}</strong>})}</li>
                        </ul>
                    </div>
                </div>
            </div>
        )

    }
}