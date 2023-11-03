<!--  -->
<template>
    <div class="">
        <dl class="con">
            <dt class="seat">
                您当前所在位置：
                <a href="#">59370手游网</a>
                →
                <a href="#">手游排行榜</a>
                → 手游TOP
            </dt>
            <div class="paihb" id="main">
                <div class="php-left">
                    <router-link to="/Router/List/Dongzuo">动作手游排行榜</router-link>
                    <router-link to="/Router/List/Tencent">腾讯手游排行榜</router-link>
                    <router-link to="/Router/List/JiuYou">九游手游排行榜</router-link>
                    <router-link to="/Router/List/AnFeng">安锋手游排行榜</router-link>
                    <router-link to="/Router/List/NetEase">网易手游排行榜</router-link>
                </div>
                <div class="php-right">
                    <router-view></router-view>
                </div>
            </div>
        </dl>
        <div style="clear: both;"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {

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

.con {
    width: 1200px;
    margin: 0 auto;
}

.seat {
    border-bottom: #e4e4e4 solid 1px;
    margin-bottom: 10px;
    padding: 12px 0 6px 0;
    font-size: 14px;
    text-align: left
}

a {
    text-decoration: none;
    color: #444;
}

#main {
    overflow: hidden;
    zoom: 1;
    margin-top: 12px;
    margin-bottom: 12px;

}

.php-left {
    width: 190px;
    float: left;
}

.php-left a {
    width: 100%;
    height: 40px;
    text-align: center;
    line-height: 40px;
    display: inline-block;
    background-color: #7f848a;
    color: #fff;
    font-size: 14px;
    margin-bottom: 10px;
    overflow: hidden;
}

.php-right {
    float: right;
    width: 960px;
    border: 1px solid #e2e2e2;
    background: #fff;
    padding: 15px
}
</style>