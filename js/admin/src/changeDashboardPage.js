import { extend } from 'flarum/extend';
import NewDashboardPage from 'datitisev/dashboard/components/DashboardPage';

export default function () {
    
    app.routes.dashboard = {path: '/', component: NewDashboardPage.component()};

}