import Modal from 'flarum/components/Modal';
import icon from 'flarum/helpers/icon';

export default class DashboardExtensionInfoModal extends Modal {

    init() {
        this.extension = this.props.extension;
        console.log(this.extension);
    }

    title() {
        return 'hello';
    }

    className() {
        return 'DashboardExtensionsItem-Info Modal--large';
    }

    content() {
        let extension = this.extension;

        return (
            <div className="DashboardExtensionInfo">
                <div className="DashboardExtensionInfo-Main">
                    <spam className="DashboardExtensionInfoMain-icon" style={extension.icon}>
                        {extension.icon ? icon(extension.icon.name) : ''}
                    </spam>
                    <h3 className="DashboardExtensionInfoMain-title">
                        {extension.extra['flarum-extension'].title}
                    </h3>
                    <span className="DashboardExtensionInfoMain-name">
                        {extension.name}
                    </span>
                    <span className="DashboardExtensionInfoMain-version">
                        {extension.version}
                    </span>
                </div>
            </div>
        )
    }

}
