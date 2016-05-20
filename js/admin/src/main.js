import { extend } from 'flarum/extend';
import app from 'flarum/app';

import changeDashboardPage from 'datitisev/dashboard/changeDashboardPage';


app.initializers.add('datitisev/dashboard', () => {

    changeDashboardPage();

});