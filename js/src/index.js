import { override } from 'flarum/extend';
import app from 'flarum/app';

import changeDashboardPage from './changeDashboardPage';
import DashboardSettingsModal from './components/DashboardSettingsModal';


app.initializers.add('datitisev/dashboard', () => {
    changeDashboardPage();

    app.extensionSettings['datitisev-dashboard'] = () => app.modal.show(new DashboardSettingsModal());
});
