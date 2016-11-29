import { extend } from 'flarum/extend';
import Page from 'flarum/components/Page';
import ItemList from 'flarum/utils/ItemList';
import icon from 'flarum/helpers/icon';

import WidgetGraph from 'datitisev/dashboard/components/WidgetGraph';
import WidgetVersions from 'datitisev/dashboard/components/WidgetVersions';
import DashboardExtensionInfoModal from 'datitisev/dashboard/components/DashboardExtensionInfoModal';

export default class DashboardPage extends Page {

    init() {
        this.extensions = app.data.extensions;
    }
    
    view() {
        return (
            <div className="DashboardPage">
                <div className="container">
                    <h2>{app.translator.trans('core.admin.dashboard.welcome_text')}</h2>
                    <div className="DashboardPage--Widgets">
                        {Object.keys(this.items().items)
                            .map(id => {
                                const section = this.items().get(id);
                                if (section) return new section;
                            })
                        }
                    </div>
                    <div className="DashboardPageExtensions">
                        {Object.keys(this.extensions)
                            .map(id => {
                                let extension = this.extensions[id];
                                return (
                                    <li className="DashboardPageExtensions--Item"
                                        onclick={() => {
                                            app.modal.show(new DashboardExtensionInfoModal({
                                                extension,
                                            }));
                                        }}>
                                        <div className="DashboardExtensionsItem-content">
                                            <spam className="DashboardExtensionsItem-icon" style={extension.icon}>
                                                {extension.icon ? icon(extension.icon.name) : ''}
                                            </spam>
                                            <label className="DashboardExtensionsItem-title">
                                                {extension.extra['flarum-extension'].title}
                                            </label>
                                        </div>
                                    </li>
                                )
                            })}
                    </div>
                </div>
            </div>
        );
    }

    items() {
        const items = new ItemList();
        
        items.add('countData', WidgetGraph);
        items.add('versions', WidgetVersions);

        return items;
    }
    
}
