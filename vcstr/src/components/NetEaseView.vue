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
                    flow: "",
                    download: "游戏下载",
                    title: ""
                }, {
                    id: 5,
                    name: "",
                    src: "",
                    role: "",
                    flow: "",
                    download: "游戏下载",
                    title: ""
                }, {
                    id: 6,
                    name: "",
                    src: "",
                    role: "",
                    flow: "",
                    download: "游戏下载",
                    title: ""
                }, {
                    id: 7,
                    name: "",
                    src: "",
                    role: "",
                    flow: "",
                    download: "游戏下载",
                    title: ""
                }, {
                    id: 8,
                    name: "",
                    src: "",
                    role: "",
                    flow: "",
                    download: "游戏下载",
                    title: ""
                }, {
                    id: 9,
                    name: "",
                    src: "",
                    role: "",
                    flow: "",
                    download: "游戏下载",
                    title: ""
                }, {
                    id: 10,
                    name: "",
                    src: "",
                    role: "",
                    flow: "",
                    download: "游戏下载",
                    title: ""
                }, {
                    id: 11,
                    name: "",
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