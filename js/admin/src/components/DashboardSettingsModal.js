import SettingsModal from 'flarum/components/SettingsModal';
import app from 'flarum/app';

export default class DashboardSettingsModal extends SettingsModal {
    className() {
        return 'DashboardSettingsModal Modal--medium';
    }

    title() {
        return app.translator.trans('datitisev-dashboard.admin.settings.title');
    }

    form() {
        return [
            <div className="Form-group">
                <h2>{app.translator.trans('datitisev-dashboard.admin.settings.github_heading')}</h2>
                <label htmlFor="client_id">{app.translator.trans('datitisev-dashboard.admin.settings.clientId_label')}</label>
                <input type="text" className="FormControl" bidi={this.setting('datitisev-dashboard.github.client_id')}/>
                <label htmlFor="client_id">{app.translator.trans('datitisev-dashboard.admin.settings.clientSecret_label')}</label>
                <input type="text" className="FormControl" bidi={this.setting('datitisev-dashboard.github.client_secret')}/>
                <h2>{app.translator.trans('datitisev-dashboard.admin.settings.graph_heading')}</h2>
                <label htmlFor="client_id">{app.translator.trans('datitisev-dashboard.admin.settings.interval_label')}</label>
                <input type="number" className="FormControl" bidi={this.setting('datitisev-dashboard.graph.dataInterval')}/>
            </div>
        ];
    }
}