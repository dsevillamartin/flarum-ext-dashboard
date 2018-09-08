import NewDashboardPage from './components/DashboardPage';

export default function () {
    app.routes.dashboard = {path: '/', component: NewDashboardPage.component()};
}