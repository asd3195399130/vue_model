
<!--  -->
<template>
    <div class="hraders">
        <div class="main">
            <h2>版权声明</h2>
            <ul>
                <li v-for="(item, index) in arr" :key="index" v-color="index">{{ item.name }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            arr: [
                {
                    id: 1,
                    name: "[59370.com]尊重各网络文件的版权问题，所有软件文件均出自网络，所有提供下载的软件和资源均为软件或程序作者提供和网友推荐收集整理而来，仅供学习和研究使用。如有侵犯你的版权，请及时 通知我 们，本站将立即改正，同时要求用户在23小时内删除从59370.com下传的文件。"
                }, {
                    id: 2,
                    name: "为了确保软件可靠性，和作者的版权，本站大部分软件都经过检查后再发布，但因为人员不够，[59370.com]不保证提供的下载资源的准确性、安全性和完整性；下载后请自行检查是否带有病毒，同时[59370.com]也不承担用户因使用这些下载资源对 自己和他人造成任何形式的损失或伤害。"
                }, {
                    id: 3,
                    name: "为了确保软件可靠性，和作者的版权，本站大部分软件都经过检查后再发布，但因为人员不够，[59370.com]不保证提供的下载资源的准确性、安全性和完整性；下载后请自行检查是否带有病毒，同时[59370.com]也不承担用户因使用这些下载资源对 自己和他人造成任何形式的损失或伤害。"
                }, {
                    id: 4,
                    name: "访问[59370.com]的用户必须明白，[59370.com]对提供下载的软件等不拥有任何权利，其版权归该下载资源的合法拥有者所有。"
                }, {
                    id: 5,
                    name: "[59370.com]保证站内提供的所有可下载资源（软件等等）都是按“原样”提供，本站未做过任何改动；但[59370.com]不保证本站提供的下载资源的准确性、安全性和完整性；同时[Pc6.com]也不承担用户因使用这些下载资源对自己和他人造成任何 形式的损失或伤害。"
                }, {
                    id: 6,
                    name: "本网站可能提供第三方网站的链接，我们不负责维护这些网站。我们不对这些网站的内容负责任。提供这些网站的链接并不意味我们对这些网站或它们的内容的认可或支持。我们不对这些链接网站作出任何陈述或保证，也不对它们负任何责任。"
                }, {
                    id: 7,
                    name: "根据二○○二年一月一日《计算机软件保护条例》规定：为了学习和研究软件内含的设计思想和原理，通过安装、显示、传输或者存储软件等方式使用软件的，可以不经软件著作权人许可，不向其支付报酬!鉴于此，也希望大家按此说明研究软件!谢 谢!"
                }, {
                    id: 8,
                    name: "不论何种情形我们都不对任何由于使用或无法使用本网站提供的信息所造成的直接的、间接的、附带的、特殊的或余波所及的损失、灵失、债务或中断负任何责任﹝不论是可预见的或是不可预见的，即使我们巳被告知这种可能性﹞。"
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

.hraders {
    width: 1009px;
    height: 90%;
    // background: red;
    margin-left: 189px;
}

.main {
    width: 980px;
}

.main h2 {
    text-align: left;
    border-bottom: 1px solid #e5e5e5;
    height: 35px;
    line-height: 35px;
    font-size: 16px;
    color: #35A035;
    text-indent: 1px;
    font-weight: bold;
    margin-bottom: 5px;
}

ul {
    list-style: none;
}

.main li {
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