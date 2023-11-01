<template>
    <div class="table">
        <CrumbView>
            <template v-slot:entertainment>
                <p>这是娱乐新闻内容</p>
            </template>

            <!-- 具名插槽，用于军事新闻 -->
            <template v-slot:military>
                <p>这是军事新闻内容</p>
            </template>

            <!-- 具名插槽，用于政治新闻 -->
            <template v-slot:politics>
                <p>这是政治新闻内容</p>
            </template>
        </CrumbView>
    </div>
</template>

<script>
import CrumbView from '@/components/CrumbView.vue';
export default {
    components: {
        CrumbView
    },
    props: {},
    data() {
        return {
            currentTab: 0
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

.table {
    width: 500px;
    height: 500px;
    background: rgba(0, 0, 0, .1);
    margin: auto;
}
</style>