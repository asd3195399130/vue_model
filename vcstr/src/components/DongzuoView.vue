<!--  -->
<template>
    <div class="">
        <div class="fx">
            <h1>动作手游排行榜</h1>
            <div class="right"></div>
        </div>
        <ul>
            <li v-for="(item, index) in dongzuo" :key="index">
                <img :src="item.src" alt="">
                <div class="nair">
                    <a href="#" class="naira">{{ item.name }}</a>
                    <b>
                        <i>{{ item.flow }}k</i>
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
                    name: "龙珠决战天域幻想手游v1.0.0安卓版",
                    src: "https://pic.59370.com/upload/2020-5/202051994650525.png",
                    role: "角色扮演",
                    flow: 478,
                    download: "游戏下载",
                    title: "龙珠决战天域幻想，动作格斗冒险手游，游戏中玩家将可以重温童年时美好的动画时光，游戏中你将可以收集全系列龙珠英雄们，多样化的副本战斗与奇遇系统等待玩家前往体验，感兴趣的玩家可以下载体验一下哦！龙珠决战天"
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