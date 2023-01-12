import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';

import DiscussionListItem from 'flarum/forum/components/DiscussionListItem';

const DiscussionListItemChange = () => {

    extend(DiscussionListItem.prototype, 'infoItems', function (items) {

        // 排序
        // items.setPriority('excerpt', 30)  // -100
        items.setPriority('discussion-votes', -120)
        // 挪移 讨论计数的位置
        items.add("replyCountItem", this.replyCountItem(), -121)
        items.setPriority('terminalPost', -122)

    })
}
export default DiscussionListItemChange