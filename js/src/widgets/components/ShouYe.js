

// 相关文章

import app from 'flarum/common/app';
import Tooltip from 'flarum/common/components/Tooltip';
import icon from 'flarum/common/helpers/icon';
import Widget from 'flarum/extensions/afrux-forum-widgets-core/common/components/Widget';
import extractText from 'flarum/common/utils/extractText';

export default class XiangGuanWenZhang extends Widget {
    className() {
        return 'Kater-jingpinzhuanti';
    }

    icon() {
        return null;
        return 'fas fa-chart-pie';
    }

    title() {
        return "相关文章";
    }

    content() {
        const msg = Array.from({ length: 10 }).fill({
            url: "#",
            title: "女子去世后现4针疫苗记录 官方通报"
        })
        return (
            <div>
                <div class="Dropdown-separator"></div>
                <ul>
                    {msg.map((val) => {
                        return m("li",
                            m("a", { href: "#" },
                                m('.klink', "最近转凉了，大家小心不要着凉ASDAFSDDFHGDH"))
                        )
                    })}
                </ul>
            </div>
        );
    }
}