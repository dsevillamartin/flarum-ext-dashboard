import { extend, override } from 'flarum/extend';
import NewDashboardPage from 'datitisev/dashboard/components/DashboardPage';
import Page from 'flarum/components/Page';

export default function () {
    
    app.routes.dashboard = {path: '/', component: NewDashboardPage.component()};

    override(Page.prototype, 'init', function () {
        app.previous = app.current;
        app.current = this;

        this.bodyClass = '';
    });

}