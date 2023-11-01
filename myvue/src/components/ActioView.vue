<!--  -->
<template>
    <div class="">
        <slot :textArr="textArr"></slot>
    </div>
</template>

<script>
export default {

    data() {
        return {
            textArr: [
                { ID: 1, title: '这是一篇非常有趣的文章，关于科学与技术的发展与应用的探讨' },
                { ID: 2, title: '新时代下的创新和创业：机遇与挑战并存' },
                { ID: 3, title: '探索未知领域：人工智能在医疗健康中的应用与前景' },
                { ID: 4, title: '数字化转型：如何推动企业的可持续发展' },
                { ID: 5, title: '绿色环保：构建美丽中国的未来' },
                { ID: 6, title: '数字经济时代的就业与职业发展' },
                { ID: 7, title: '云计算与大数据：开启信息时代的新篇章' },
                { ID: 8, title: '智能交通系统：改变出行方式、提升城市品质' },
                { ID: 9, title: '人类与宇宙：探索星际之旅的奇妙世界' },
                { ID: 10, title: '未来教育：培养创新思维与终身学习的重要性' }
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
</style>