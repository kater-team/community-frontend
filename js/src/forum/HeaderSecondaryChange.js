import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';

import HeaderSecondary from 'flarum/forum/components/HeaderSecondary';

import NotificationsDropdown from 'flarum/forum/components/NotificationsDropdown';
import FlagsDropdown from 'flarum/forum/flags/components/FlagsDropdown';


// 头部更改
const HeaderSecondaryChange = () => {

    extend(HeaderSecondary.prototype, 'items', function (items) {

        items.replace('notifications', NotificationsDropdown.component({ state: app.notifications, icon: "far fa-bell" }), 10);
        items.replace('flags', <FlagsDropdown state={app.flags} icon="far fa-flag" />, 15);

    })
}
export default HeaderSecondaryChange;