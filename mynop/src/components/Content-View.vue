<!--  -->
<template>
    <div class="header">
        <div class="mian">
            <h2>关于我们</h2>
            <p>网站说明：</p>
            <ul class="gredot">
                <li>
                    59370手游网会以最快的速度为大家提供高速的软件下载,所有服务我们将免费为大家服务，现在各栏目还是刚刚推出，所收录的软件可能不是太多，有不足的地方还请大家指点．其他的栏目正在紧张的开发中，请大家时常关注我们，也欢迎您能加入到我们软件搜索中间来
                </li>
            </ul>
            <p>网站优势</p>
            <ul>
                <li>
                    59370手游网是国内大型的更新最快的软件信息发布中心。经历多年的稳定发展，现已成为国内影响力最大的软件门户网站。
                </li>
                <p>网站愿景：</p>
                <li>59370手游网推出作者发布,旨在希望能为软件作者提供一个展示自己产品的优秀平台，在以后的日子里，59370手游网有您更精彩。</li>
                <li>
                    59370手游网致力于推动中国软件产业的发展，面对未来，我们将秉承稳固与发展、求实与创新的精神，让广大的软件作者和软件厂商获得最需要的信息，体验最完美的服务。
                </li>
            </ul>
            <ul>
                <li>
                    <strong>我们要做的</strong>
                    及时更新最新、最好、最准、最完整的软件，及软件资讯。
                </li>
                <li>
                    <strong>我们希望的</strong>
                    您将我们网站告诉你的朋友，让更多的人来这里学习，共同进步。
                </li>
                <li>
                    追求永无止境，您的满意是我们永恒的追求!!!
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: [
                {

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

.header {
    width: 1009px;
    height: 90%;
    // background: red;
    margin-left: 189px;
}

.mian {
    width: 980px;
}

.mian p {
    padding: 4px 10px;
    color: #2e2e2e;
    font-weight: bold;
    text-align: left;
}

.mian h2 {
    text-align: left;
    border: 1px solid #e5e5e5;
    height: 35px;
    line-height: 35px;
    font-size: 16px;
    color: #35a035;
    text-indent: 1px;
    font-weight: bold;
    margin-bottom: 5px;
}

ul {
    list-style: none;
}

.mian li {
    padding: 4px 10px;
    text-indent: 3em;
    background: url(https://www.59370.com/app/images/gredot.gif)44px 14px no-repeat;
    font-size: 14px;
    float: left
}

li {
    display: list-item;
    text-align: -webkit-match-parent;
}
</style>