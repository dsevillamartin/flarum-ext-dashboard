import app from 'flarum/app';
import DashboardWidget from 'flarum/components/DashboardWidget';

export default class DashboardWidgetGraph extends DashboardWidget {
    content() {
        const { userCount, discussionCount, postCount } = app.data['datitisev-dashboard.data'];

        return (
            <div className="DashboardGraph--Categories">
                <div className="DashboardGraph--Category Category--Users">
                    <span className="color" />
                    {app.translator.trans('datitisev-dashboard.admin.dashboard.graph.users')}
                    <br />
                    <span className="number">{userCount}</span>
                </div>
                <div className="DashboardGraph--Category Category--Discussions">
                    <span className="color" />
                    {app.translator.trans('datitisev-dashboard.admin.dashboard.graph.discussions')}
                    <br />
                    <span className="number">{discussionCount}</span>
                </div>
                <div className="DashboardGraph--Category Category--Posts">
                    <span className="color" />
                    {app.translator.trans('datitisev-dashboard.admin.dashboard.graph.posts')}
                    <br />
                    <span className="number">{postCount}</span>
                </div>
            </div>
        );
    }

    className() {
        return 'DashboardGraph';
    }
}
