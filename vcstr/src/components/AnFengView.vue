<!--  -->
<template>
    <div class="">
        <div class="fx">
            <h1>安锋手游排行榜</h1>
            <div class="right"></div>
        </div>
        <ul>
            <li v-for="(item, index) in dongzuo" :key="index">
                <img :src="item.src" alt="">
                <div class="nair">
                    <a href="#" class="naira">{{ item.name }}</a>
                    <b>
                        <i>{{ item.flow }}M</i>
                        <i>{{ item.role }}</i>
                        <i class="dir"></i>
                        <a href="#" class="dirc">{{ item.download }}</a>
                    </b>
                    <b class="info">
                        {{ item.title }}
                    </b>
                </div>
                <em>{{ item.id }}</em>
            </li>
        </ul>
        <div style="clear: both;"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dongzuo: [
                {
                    id: 1,
                    name: "安锋游戏全民枪战v2.8安卓版",
                    src: "https://pic.59370.com/upload/2016-8/201682152714590.png",
                    role: "枪战射击",
                    flow: "363",
                    download: "游戏下载",
                    title: "全民枪战安锋版是一款射击手游，让玩家能够体验射击快感。游戏玩法新颖，同服竞技，炫酷的技能流光，好玩有趣的模式系统。新增的游戏玩法，让玩家畅玩不停。此次小编带来的是安锋版的，为玩家准备专属手机游戏礼包免"
                }, {
                    id: 2,
                    name: "死神觉醒安锋版v1.7.160官网安卓版",
                    src: "https://pic.59370.com/upload/2016-6/20166211538492303.png",
                    role: "动作竞技",
                    flow: "385.1",
                    download: "游戏下载",
                    title: "安锋版死神觉醒是一款根据同名动漫而改编的手机卡牌游戏。从画面剧情到人物招式完美还原，游戏采用全新手势操作战斗模式，告别传统虚拟摇杆，移动、防御、连击，热血战斗尽在点划之间。游戏中，玩家将控制黑崎一护展"

                }, {
                    id: 3,
                    name: "安锋客户端时空猎人v5.1.287安卓版",
                    src: "https://pic.59370.com/upload/2016-6/20166211428333942.png",
                    role: "动作竞技",
                    flow: "253",
                    download: "游戏下载",
                    title: "时空猎人安锋客户端是一款经典的手机格斗游戏。你可以在这里体验到最刺激的格斗玩法，游戏中有着多种职业可以选择，职业的特性以及攻击方式也都不尽相同，副本、活动、任务等超多玩法元素等待着您体验，有需求的朋友"
                }, {
                    id: 4,
                    name: "列王的纷争安锋客户端v6.01.0 安卓版",
                    src: "https://pic.59370.com/upload/2016-6/2016621145544188.png",
                    role: "策略塔防",
                    flow: "65.6",
                    download: "游戏下载",
                    title: "列王的纷争安锋版本是一款非常受欢迎的大型策略手机游戏。游戏中您可以和全世界的玩家交朋友或是和他们一同竞技，感受战争的乐趣，霸主荣耀虚位以待，你敢来吗？心动的朋友们快来59370手游网下载体验吧！游戏介绍各国"
                }, {
                    id: 5,
                    name: "皇室战争安锋版v1.4.2安卓版",
                    src: "https://pic.59370.com/upload/2016-6/20166211841156462.jpg",
                    role: "卡牌游戏",
                    flow: "97.8",
                    download: "游戏下载",
                    title: "皇室战争安锋游戏是一款以对战为主的卡牌类手机游戏。游戏里您可以收集并升级几十种你所熟知和喜爱的《部落冲突》的军队，法术以及防御建筑卡牌，还有同样令人喜爱的皇室家族人物：王子，骑士，飞龙宝宝等。您也可以"
                }, {
                    id: 6,
                    name: "战警大国崛起安锋版V4.7.61安卓版",
                    src: "https://pic.59370.com/upload/2016-7/20167151127253748.png",
                    role: "策略塔防",
                    flow: "42.5",
                    download: "游戏下载",
                    title: "战警大国崛起安锋版是一款以军事题材为背景，将坦克射击、策略塔防游戏特色融合而打造的战争手游。游戏独创联盟新玩法，胜者联盟统帅败者联盟!万人在线，建设强大军团，打造军事大国!上手易，玩不腻，绝对超一流的战"
                }, {
                    id: 7,
                    name: "少年西游记安锋版客户端v1.0.6官网安卓版",
                    src: "https://pic.59370.com/upload/2016-7/20167211033342301.png",
                    role: "卡牌游戏",
                    flow: "70.3",
                    download: "游戏下载",
                    title: "少年西游记安锋版是一款集西游记题材、动作冒险、角色扮演等游戏特色于一体的卡牌手游。游戏有着炫酷的法宝，你可以在这里书写你的西游之路，降妖除魔少不了，还有时尚的游戏画风，更有热闹的弹幕，以及脑洞比较大的"
                }, {
                    id: 8,
                    name: "暗黑黎明2手游安锋版V1.1.0官网安卓版",
                    src: "https://pic.59370.com/upload/2016-7/2016721151955118.png",
                    role: "动作竞技",
                    flow: "232.5",
                    download: "游戏下载",
                    title: "暗黑黎明2安锋版是一款由国际明星范冰冰倾情代言，主打暗黑风格的动作竞技类RPG手游。游戏拥有极致打击感，近百种连招组合方式，是一款颠覆传统手游的激战大作。年度最受期待3D动作手游，游戏在延续前作经典玩法的同"
                }, {
                    id: 9,
                    name: "九阴真经安锋客户端v1.2.0官网安卓版",
                    src: "https://pic.59370.com/upload/2016-7/2016722930447475.jpg",
                    role: "仙侠手游",
                    flow: "336.9",
                    download: "游戏下载",
                    title: "九阴真经安锋版是一款以中国古典武侠风格为游戏题材，结合动作竞技、角色扮演等游戏特色而打造的武侠手游。游戏保留了九阴真经突破职业限制的精髓、虚实架招诸多核心玩法,加上轻功、奇遇等特色玩法和中国风，为武侠爱"
                }, {
                    id: 10,
                    name: "御剑情缘手游安锋版客户端v1.1.9安卓版",
                    src: "https://pic.59370.com/upload/2016-7/2016722112083943.png",
                    role: "仙侠手游",
                    flow: "277.4",
                    download: "游戏下载",
                    title: "御剑情缘安锋版是一款由仙剑云之凡全明星倾情代言的东方仙侠玄幻类型角色扮演手游。游戏首创双人飞行，玩家可置身仙幻大世界自由御剑擎空，彻底告别传统手游低空飞行束缚。更有个性捏脸、华丽时装、飞剑幻化、萌宠育"
                }, {
                    id: 11,
                    name: "劲舞团安锋手游",
                    src: "",
                    role: "",
                    flow: "",
                    download: "游戏下载",
                    title: ""
                }, {
                    id: 12,
                    name: "",
                    src: "",
                    role: "",
                    flow: "",
                    download: "游戏下载",
                    title: ""
                }, {
                    id: 13,
                    name: "",
                    src: "",
                    role: "",
                    flow: "",
                    download: "游戏下载",
                    title: ""
                }
            ]
        }
    },
    created() {

    },
    mounted() {

    }
}
</script>
<style lang="less" scoped>
/* @import url(); 引入css类 */
* {
    margin: 0;
    padding: 0;

}

.fx {
    height: 35px;
    line-height: 35px;
    border-bottom: 1px solid #e2e2e2;
}

.height {
    height: 20px;
    width: 200px;
    margin-top: 5px;
    float: right;
}

li {
    height: 85px;
    width: 100%;
    overflow: hidden;
    padding: 20px 0px;
    border-bottom: 1px dashed #e2e2e2;
    float: left;
}

.fx h1 {
    font-size: 18px;
    float: left;
    color: #333;
    border: none;
    line-height: normal;
    position: static;
}

ul {
    list-style: none;
}

img {
    width: 85px;
    height: 85px;
    border-radius: 20%;
    float: left;
}

.nair {
    display: inline-block;
    width: 750px;
    height: 85px;
    float: left;
    margin-left: 15px;

}

a {
    color: #444;
    text-decoration: none;
}

.nair .naira {
    display: inline-block;
    width: 100%;
    height: 25px;
    line-height: 25px;
    font-size: 14px;
    color: #666;
    font-weight: bold;
    overflow: hidden;
    text-align: left
}

em {
    font-weight: bold;
    display: inline-block;
    width: 56px;
    background-color: #adb1b4;
    text-align: center;
    line-height: 85px;
    height: 85px;
    font-size: 25px;
    color: #fff;
    border-radius: 5px;
    float: right;
    text-decoration: none;
    font-style: normal;
}

b {
    display: inline-block;
    width: 100%;
    font-style: normal;
    font-weight: normal;
    text-decoration: none;
}

i {
    height: 22px;
    line-height: 22px;
    padding-right: 10px;
    color: #666;
    display: inline-block;
    float: left;
    font-style: normal;
    font-weight: normal;
    text-decoration: none;

}

.dir {
    margin-left: 15px;
    width: 22px;
    background: url(https://www.59370.com/statics/images/case.jpg)no-repeat 0px -66px
}

.dirc {
    margin-left: 30px;
    display: inline-block;
    float: left;
    height: 22px;
    width: 75px;
    text-align: center;
    line-height: 22px;
    border-radius: 3px;
    color: #fff;
    background-color: #ff6600;
    font-size: 12px;
}

.info {
    font-size: 12px;
    color: #999;
    line-height: 20px;
    height: 40px;
    overflow: hidden;
    width: 100%;
}
</style>