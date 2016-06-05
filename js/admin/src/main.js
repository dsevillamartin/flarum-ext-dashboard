import { extend } from 'flarum/extend';
import app from 'flarum/app';

import changeDashboardPage from 'datitisev/dashboard/changeDashboardPage';
import DashboardSettingsModal from 'datitisev/dashboard/components/DashboardSettingsModal';


app.initializers.add('datitisev/dashboard', () => {

    changeDashboardPage();

    app.extensionSettings['datitisev-dashboard'] = () => app.modal.show(new DashboardSettingsModal());

});
