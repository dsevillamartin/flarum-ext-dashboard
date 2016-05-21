import { extend } from 'flarum/extend';
import DashboardPage from 'flarum/components/DashboardPage';

import NewDashboardPage from 'datitisev/dashboard/components/DashboardPage';

export default function () {

    DashboardPage.prototype.view = () => {
        
        return new NewDashboardPage();

    }
}