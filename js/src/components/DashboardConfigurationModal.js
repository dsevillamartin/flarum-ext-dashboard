import Modal from 'flarum/components/Modal';
import icon from 'flarum/helpers/icon';

export default class DashboardConfigurationModal extends Modal {

  init() {
    this.page = this.props.page;
  }

  className() {
    return 'DashboardConfigurationModal Modal--large';
  }

  content() {
    const page = app.routes[this.page.props.href.replace('/', '')];
    return (
        <div>
            {new page.component.component()}
        </div>
    );
  }

}
