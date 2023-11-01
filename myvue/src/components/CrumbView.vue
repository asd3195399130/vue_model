<!--  -->
<template>
    <div class="">
        <div>
            <button @click="currentTab = 'entertainment'">娱乐新闻</button>
            <button @click="currentTab = 'military'">军事新闻</button>
            <button @click="currentTab = 'politics'">政治新闻</button>
        </div>

        <div>
            <template v-if="currentTab === 'entertainment'">
                <h2>娱乐新闻</h2>
                <!-- 具名插槽，用于显示娱乐新闻内容 -->
                <slot name="entertainment"></slot>
            </template>

            <template v-else-if="currentTab === 'military'">
                <h2>军事新闻</h2>
                <!-- 具名插槽，用于显示军事新闻内容 -->
                <slot name="military"></slot>
            </template>

            <template v-else-if="currentTab === 'politics'">
                <h2>政治新闻</h2>
                <!-- 具名插槽，用于显示政治新闻内容 -->
                <slot name="politics"></slot>
            </template>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentTab: 'entertainment'
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

a {
    text-decoration: none;
}

li {
    display: inline-block;
    margin-right: 5px;
}

button {
    width: 150px;
    height: 60px;
    border: none;
    background: blue;
    margin-left: 15px;
}
</style>