<!--  -->
<template>
    <div class="">
        <div class="fx">
            <h1>腾讯手游排行榜</h1>
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
                    name: "全民枪王腾讯版v1.6.2安卓网版",
                    src: "https://pic.59370.com/upload/2016-6/20166221743281552.png",
                    role: "枪战射击",
                    flow: "342.3",
                    download: "游戏下载",
                    title: "全民枪王游戏是一款由腾讯推出的首款掌上竞技类FPS手游。经典对战地图，爽快射击手感，用手机展现无与伦比的技巧和意识！炫酷机甲、无人战机等创新载具悉数登场，丰富细节给您与众不同的射击体验！生化战场、机甲世界"
                }, {
                    id: 2,
                    name: "全民突击腾讯版v2.4.0官网安卓版",
                    src: "https://pic.59370.com/upload/2016-6/2016623856297620.png",
                    role: "射击游戏",
                    flow: "268.6",
                    download: "游戏下载",
                    title: "全民突击最新版本是一款是腾讯推出的首款掌上即时射击类手机游戏。全3D绚丽画面,打造电影级视觉盛宴；经典名枪、炫酷战车,构建军迷博物馆；最强佣兵团养成系统,晋升全能指挥官；闯关模式、无尽模式，再现真实战场；真"

                }, {
                    id: 3,
                    name: "天天酷跑2017游戏v1.038.0安卓版",
                    src: "https://pic.59370.com/upload/2016-10/201610221019117670.jpg",
                    role: "动作竞技",
                    flow: "353.2",
                    download: "游戏下载",
                    title: "天天酷跑最新版想必大家都玩过此款游戏吧！此次小编带来的2016年天天酷跑最新版，特色玩法，新颖的系统，更多多种功能，优化一些游戏界面。让玩家能够享受更多的游戏体验。如果你也想玩的话，赶紧来下载吧！游戏介绍"
                }, {
                    id: 4,
                    name: "雷霆战机官方版2017游戏V1.00.282安卓版",
                    src: "https://pic.59370.com/upload/2016-10/20161022103443786.png",
                    role: "枪战射击",
                    flow: "296.9",
                    download: "游戏下载",
                    title: "雷霆战机最新版本由腾讯游戏官方打造经典的飞行射击手游，让玩家感受射击快感，引爆玩家的打飞机的热情。小编为玩家带来了最新版，如果你也想玩的话，赶紧来下载吧！游戏介绍雷霆战机，腾讯飞机游戏巅峰巨作。在继承"
                }, {
                    id: 5,
                    name: "天天炫斗最新版手游v1.28.323.1安卓版",
                    src: "https://pic.59370.com/upload/2016-10/20161022112528002.png",
                    role: "动作竞技",
                    flow: "30.2",
                    download: "游戏下载",
                    title: "天天炫斗官网是由腾讯游戏打造的格斗手游。此次小编为玩家带来了最新的版本的天天炫斗手游。让玩家享受特色游戏带来的刺激和快感。如果你也想玩的话，赶紧来下载吧！游戏介绍时尚青年最爱的格斗手游《天天炫斗》！新"
                }, {
                    id: 6,
                    name: "节奏大师最新版游戏v2.5.7.1安卓版",
                    src: "https://pic.59370.com/upload/2016-10/201610221124472847.jpg",
                    role: "56.8",
                    flow: "音乐游戏",
                    download: "游戏下载",
                    title: "https://pic.59370.com/upload/2016-10/201610221124472847.jpg"
                }, {
                    id: 7,
                    name: "天天爱消除最新版v1.0.44.0",
                    src: "https://pic.59370.com/upload/2016-10/201610221139118626.jpg",
                    role: "休闲养成",
                    flow: "77.5",
                    download: "游戏下载",
                    title: ""
                }, {
                    id: 8,
                    name: "2017天天飞车最新版v2.16.6.329官方安卓版",
                    src: "https://pic.59370.com/upload/2016-10/20161024816212905.jpg",
                    role: "赛车游戏",
                    flow: "202.8",
                    download: "游戏下载",
                    title: "天天飞车手游是由腾讯游戏打造的一款3D赛车游戏，想必大家都有玩过，此次小编带来的了最新版本游戏和游戏礼包，让你玩家领略赛车手游的乐趣。如果想玩，赶紧来下载吧！游戏介绍《天天飞车》是一款由腾讯游戏《QQ飞车"
                }, {
                    id: 9,
                    name: "2017全民飞机大战手机版v2.16.6.329官方安卓版",
                    src: "https://pic.59370.com/upload/2016-10/20161024833565639.png",
                    role: "枪战射击",
                    flow: "182.1",
                    download: "游戏下载",
                    title: "全民飞机大战官网是由腾讯游戏打造的飞行射击手游，想必大家都有玩过。此次小编带来的是最新版和最新的游戏礼包，让玩家体验射击手游和飞行手游复合玩法。如果也想玩赶紧来下载吧！游戏介绍《全民飞机大战》是由腾讯"
                }, {
                    id: 10,
                    name: "游龙英雄最新版v1.12.100官网安卓版",
                    src: "https://pic.59370.com/upload/2016-10/20161024102283217.png",
                    role: "动作竞技",
                    flow: "119.8",
                    download: "游戏下载",
                    title: "游龙英雄手游是由腾讯游戏打造的横版格斗手游，此次小编带来的是最新版本，让玩家享受快速享受动作手游和冒险手游复合玩法。还有免费游戏礼包等你来拿，如果你也喜欢的话，赶紧来下载吧！游戏介绍《游龙英雄》腾讯横"
                }, {
                    id: 11,
                    name: "天天富翁官网手游手机版v3.2.4安卓版",
                    src: "https://pic.59370.com/upload/2016-10/201610241033202979.png",
                    role: "策略塔防",
                    flow: "49.9",
                    download: "游戏下载",
                    title: "天天富翁最新版本是由腾讯游戏打造的休闲类模拟经营手游，想必大家都有玩过此类手机游戏吧！此次小编带来的是最新版本，让玩家享受最新的养成手游，经营手游，休闲手游的复合玩法。如果你喜欢的话，赶紧来下载吧！游"
                }, {
                    id: 12,
                    name: "全民炫舞手游版游戏v1.0.4安卓版",
                    src: "https://pic.59370.com/upload/2016-10/20161024120473547.jpg",
                    role: "其他网游",
                    flow: "56.9",
                    download: "游戏下载",
                    title: "全民炫舞手游是由腾讯游戏独家打造的音乐类舞蹈手游，为玩家打造的了闯关模式，经典模式。让玩家享受新颖的音乐手游，此次小编带来的是最新版，如果你也想玩这款手游游戏的话，赶集来下载吧！游戏介绍腾讯首款音乐舞"
                }, {
                    id: 13,
                    name: "奇迹暖暖",
                    src: "https://pic.59370.com/upload/2016-10/20161025840564028.png",
                    role: "休闲养成",
                    flow: "336.3",
                    download: "游戏下载",
                    title: "奇迹暖暖官方免费是由苏州叠纸网络科技有限公司荷腾讯游戏独家代理的换装手游，此次小编带来的是最新版还有新版的游戏礼包。如果你也喜欢这款养成手游的话，赶紧来下载吧！游戏介绍《奇迹暖暖》是苏州叠纸网络科技有"
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