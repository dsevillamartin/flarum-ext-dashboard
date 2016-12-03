import { extend } from 'flarum/extend';
import Page from 'flarum/components/Page';
import ItemList from 'flarum/utils/ItemList';
import icon from 'flarum/helpers/icon';

import WidgetGraph from 'datitisev/dashboard/components/WidgetGraph';
import WidgetVersions from 'datitisev/dashboard/components/WidgetVersions';
import DashboardExtensionInfoModal from 'datitisev/dashboard/components/DashboardExtensionInfoModal';
import DashboardConfigurationModal from 'datitisev/dashboard/components/DashboardConfigurationModal';
import AdminNav from "flarum/components/AdminNav";

export default class DashboardPage extends Page {

    init() {
        this.extensions = app.data.extensions;

        super.init();
    }
    
    view() {
        const pages = AdminNav.prototype.items();
        pages.remove('dashboard');

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
                    <div className="DashboardPageConfigurations">
                        {pages.toArray()
                            .map(page => {
                                console.log(page);
                                return (
                                    <li className="DashboardPageExtensions--Item"
                                        onclick={() => {
                                            app.modal.show(new DashboardConfigurationModal({
                                                page
                                            }))
                                        }}>
                                        {page.props.children[0]}
                                    </li>
                                )
                            })}
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
