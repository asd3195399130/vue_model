<!--  -->
<template>
    <div class="Scan" style="height:420px">
        <div class="scan-cmn">
            <h2>扫码登陆</h2>
            <img src="../assets/二维码.png" alt="" width="161px" height="161px">
            <p class="lg_loginbox_text er_text">打开<a
                    href="https://m.ctrip.com/webapp/mkt/app-channel-statistics/H5View/centerpage/download.html"
                    target="_blank" rel="noreferrer">携程APP</a>扫描二维码登录</p>
        </div>
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

h2 {
    text-align: left;
    font-size: 14px;
    font-weight: 400;
}

a {
    text-decoration: none;
    color: #2577E3;

}

img {
    margin-top: 50px;
}

p {
    margin-top: 10px;
}
</style>