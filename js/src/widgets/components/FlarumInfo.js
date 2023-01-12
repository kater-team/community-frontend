
import app from 'flarum/common/app';
import Tooltip from 'flarum/common/components/Tooltip';

import icon from 'flarum/common/helpers/icon';
import Widget from 'flarum/extensions/afrux-forum-widgets-core/common/components/Widget';
import extractText from 'flarum/common/utils/extractText';


import Button from "flarum/common/components/Button";
import ItemList from 'flarum/common/utils/ItemList';
import listItems from 'flarum/common/helpers/listItems';

// 论坛 简介
export default class FlarumInfo extends Widget {
    className() {
        return 'Kater-flaruminfo';
    }

    icon() {
        return null;
    }

    title() {
        return null;
    }

    toolList() {
        const items = new ItemList();
        // 简体中文 夜间模式 与装置同步
        items.add(
            'language',
            Button.component(
                {
                    icon: "fas fa-eye",
                    disabled: true
                },
                "简体中文"
            )
        )
        items.add(
            'modal',
            Button.component(
                {
                    icon: "fas fa-eye",
                    disabled: true
                },
                "夜间模式"
            )
        )
        items.add(
            'setting',
            Button.component(
                {
                    icon: "fas fa-eye",
                    disabled: true
                },
                "与装置同步"
            ))
        return items;
    }

    content() {

        const link = [
            {
                title: "本站站规",
                href: "www.baidu.com"
            },
            {
                title: "免责声明",
                href: "www.baidu.com"
            },
            {
                title: "QQ群1",
                href: "www.baidu.com"
            },
            {
                title: "QQ群2",
                href: "www.baidu.com"
            },
            {
                title: "QQ群2",
                href: "www.baidu.com"
            },
            {
                title: "QQ群2",
                href: "www.baidu.com"
            },
            {
                title: "QQ群2",
                href: "www.baidu.com"
            },
            {
                title: "QQ群2",
                href: "www.baidu.com"
            },

        ]

        const contact = [
            {
                title: "联系我们1",
                href: "www.baidu.com"
            },
            {
                title: "联系我们2",
                href: "www.baidu.com"
            },
        ]

        return (
            <div class="kater-copyright">
                <div class="Dropdown-separator"></div>
                <div class="copyright-main">
                    <div class="Info">
                        <div class="title">
                            Kater
                        </div>
                        <div class="assist">
                            台灣新型綜合匿名討論交流平台
                        </div>
                    </div>

                    <div class="Info-link">
                        {link.map((item) => {
                            return <a href={item.href}>{item.title}</a>
                        })}
                    </div>
                    <div class="Info-contact">
                        {contact.map((item) => {
                            return <div>{item.title}</div>
                        })}
                    </div>
                    <div class="Info-tool">
                        {listItems(this.toolList().toArray(), 'div')}
                    </div>
                </div>
            </div>
        );
    }
}