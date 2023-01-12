

// 精品专题

import app from 'flarum/common/app';
import Tooltip from 'flarum/common/components/Tooltip';
import icon from 'flarum/common/helpers/icon';
import Widget from 'flarum/extensions/afrux-forum-widgets-core/common/components/Widget';
import extractText from 'flarum/common/utils/extractText';

export default class JingPinZhuanti extends Widget {
    className() {
        return 'Kater-jingpinzhuanti';
    }

    icon() {
        return null;
        return 'fas fa-chart-pie';
    }

    title() {
        return "精品专题";
    }

    content() {

        const msg = [
            {
                url: "#",
                title: "发点色图"
            },
            {
                url: "#",
                title: "老司机般的操作"
            },
            {
                url: "#",
                title: "发点色图"
            },
            {
                url: "#",
                title: "老司机般的操作"
            },
            {
                url: "#",
                title: "多地积极恢复和扩大消费"
            },
            {
                url: "#",
                title: "女子去世后现4针疫苗记录 官方通报"
            },
        ]

        return (
            <div >
                <div class="Dropdown-separator"></div>
                <ul>
                    {msg.map((val) => {
                        return m("li",
                            m("a", { href: val.url },
                                m('.klink', val.title)
                            ))
                    })}
                </ul>
            </div>
        );
    }
}