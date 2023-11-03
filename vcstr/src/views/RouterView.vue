<!--  -->
<template>
    <div class="">
        <div class="" id="box">
            <!-- <h1>4444</h1> -->
            <div class="header_box">
                <!-- <h1>4444</h1> -->
                <strong>59370手游网：您身边最放心的最好玩的手游下载站！</strong>
                <div class="header_box_a">
                    <a href="#">59370首页</a>|
                    <a href="#">手游攻略</a>|
                    <a href="#">H5游戏</a>|
                    <a href="#">最新更新</a>|
                    <a href="#">热门排行</a>|
                    <a href="#">手机版</a>
                </div>
            </div>
            <dl id="header-box">
                <dt class="logo_ls">
                    <a href="#" class="logo">
                        <h1>
                            <img src="https://www.59370.com/statics/images/logo_59370.png" alt="">
                        </h1>
                    </a>
                </dt>
                <dd class="nav">
                    <p>
                        <router-link to="/Router/HomePage">首页</router-link>
                        <router-link to="/Router/List">榜单</router-link>
                        <router-link to="/Router/Onlinegames">网游</router-link>
                        <a href="#">单击</a>
                        <a href="#">应用</a>
                        <a href="#">专题</a>
                        <a href="#">厂商</a>

                    </p>
                    <div id="search">
                        <input type="text" class="bdcs-search-form-input" placeholder="我的世界">
                        <input type="submit" id="bdcs-search-form-submit" value="搜索">
                    </div>
                </dd>
            </dl>
        </div>
        <router-view></router-view>
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

#box {
    width: 100%;
    height: 150px;
    // background: red;

}

.header_box {
    width: 1200px;
    height: 41px;
    margin: auto;
    background: #fafafa;
    line-height: 41px;
    border-bottom: 1px solid #e2e2e2;
    font-size: 14px;
}

strong {
    font-weight: normal;
    color: #666;
    float: left;
}

.header_box_a {
    float: right;

    font-style: normal;
}

a {
    text-decoration: none;
    color: #bbb;
    margin: 0 10px;
}

#header-box {
    width: 1200px;
    margin: 0 auto;
    position: relative;
    z-index: 999;
    overflow: hidden;

}

.logo_ls {
    width: 1200px;
    margin: 0 auto;
}

.logo {
    width: 300px;
    display: block;
    padding: 1px 0;
}

.nav {
    height: 45px;
    background: #65bb0a;
    font-family: "\5FAE\8F6F\96C5\9ED1";
}

.nav p {
    width: 1200px;
    margin: 0 auto;
}

.nav p a {
    display: block;
    width: 130px;
    float: left;
    text-align: center;
    height: 45px;
    line-height: 45px;
    color: #fff;
    font-size: 16px;
    margin: 0 auto;
}

.nav p a:hover {
    background: #039c03;
}

#search {
    width: 534px;
    height: 38px;
    position: absolute;
    right: 0;
    top: 28px;
    z-index: 0;
}

.bdcs-search-form-input {
    float: left;
    display: inline;
    width: 385px;
    height: 26px;
    line-height: 26px;
    overflow: hidden;
    padding: 4px 60px 4px 5px;
    background: #fff;
    border: 2px solid #65bb6a;
    border-right: 0 none;
    font-size: 0 12px;
    color: #333;
}

#bdcs-search-form-submit {
    float: left;
    width: 72px;
    height: 38px;
    border: 0 none;
    cursor: pointer;
    background: #65bb0a;
    color: #fff;
    font-size: 14px;
}
</style>