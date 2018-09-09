import { extend } from 'flarum/extend';
import AdminNav from 'flarum/components/AdminNav';
import DashboardPage from 'flarum/components/DashboardPage';

import WidgetGraph from "./components/DashboardWidgetGraph";
import WidgetExtensions from "./components/DashboardWidgetExtensions";

app.initializers.add('datitisev/dashboard', () => {

    extend(AdminNav.prototype, 'items', items => {
        items.remove('extensions');
    });

    extend(DashboardPage.prototype, 'availableWidgets', items => {
        items.push(<WidgetGraph />);
        items.push(<WidgetExtensions />);
    })
});
