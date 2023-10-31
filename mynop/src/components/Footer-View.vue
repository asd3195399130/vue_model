<!--  -->
<template>
    <div class="mfoot">
        <ul>
            <li v-for="item in arr" :key="item.id">
                <a href="#">{{ item.name }}</a> <span>&nbsp;|</span>
            </li>
        </ul>
        Copyright © 2013-2020 <span>59370手游网</span>. All Rights Reserved<a
            href="#">鄂ICP备2022009075号-1</a>联系邮箱：lxshouyouwang@163.com
    </div>
</template>

<script>
export default {
    data() {
        return {
            arr: [
                {
                    id: 1,
                    name: "关于本站"
                }, {
                    id: 2,
                    name: "下载声明"
                }, {
                    id: 3,
                    name: "广告合作"
                }, {
                    id: 4,
                    name: "友情链接"
                }, {
                    id: 5,
                    name: "联系我们"
                }, {
                    id: 6,
                    name: "网站地图"
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

.mfoot {
    width: 1200px;
    margin: auto;
}

ul {
    list-style: none;
    margin-left: 10px;
    line-height: 28px;
    clear: both;
    color: #333;
    padding: 25px 0;
    margin-top: 5px;
    border-top: 1px solid #ddd;
    font-size: 14px;
    text-align: center;
    display: flex;
    justify-content: center
}

ul li {
    margin-left: 10px;
    line-height: 28px;
    text-align: center;
}

a {
    color: #333;
    text-decoration: none;
}

li:last-of-type span {
    display: none;
}
</style>