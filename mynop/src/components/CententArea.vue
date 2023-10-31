<template>
    <div class="">
        <dt class="seat">
            您当前所在得位置：
            <a href="#">首页</a>
            → 关于我们
        </dt>
        <LeftView></LeftView>
        <!-- <ContentView></ContentView> -->
        <!-- <HelpView></HelpView> -->
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
div {
    width: 1200px;
    height: 500px;
    // background: black;
    // border: 1px solid red;
    margin: 10px auto;
}

.seat {
    border-bottom: #e4e4e4 solid 1px;
    margin-bottom: 10px;
    padding: 12px 0 6px 0;
    display: flex;
    font-size: 14px;
}

a {
    text-decoration: dashed;
}
</style>