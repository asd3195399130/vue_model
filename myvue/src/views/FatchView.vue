<!--  -->
<template>
    <div class="">
        <div>
            <input type=" text" v-model="CNY">人民币
            <p>英镑{{ GBP }}</p>
            <p>欧元{{ EUR }}</p>
            <p>美元{{ USD }}</p>
            <p>俄罗斯卢布{{ RUB }}</p>
        </div>

        <ActioView>
            <template scope="obj">
                <div>
                    <!-- {{ obj }} -->
                    <ul>
                        <li v-for="(item, index) in obj.textArr" :key="item.ID" v-color="index">
                            <h1>{{ item.ID }}---{{ item.title }}</h1>
                        </li>
                    </ul>
                </div>
            </template>
        </ActioView>
    </div>
</template>

<script>
import ActioView from '@/components/ActioView.vue';
export default {
    directives: {
        color(el, binding) {
            const value = binding.value;
            if (value % 2 == 0) {
                el.style.color = "#7303c0";
            } else {
                el.style.color = "#03c085";
            }
        }
    },
    components: {
        ActioView
    },
    data() {
        return {
            CNY: 0,
            GBP: 0,
            EUR: 0,
            USD: 0,
            RUB: 0
        }
    },
    created() {

    },
    mounted() {

    }, watch: {
        CNY(newVal, oldVal) {
            console.log(newVal, oldVal)
            this.GBP = this.CNY * 0.1124;
            this.EUR = this.CNY * 0.1294;
            this.USD = this.CNY * 0.1366;
            this.RUB = this.CNY * 12.7495;
        }
    }
}
</script>
<style lang="less" scoped>
/* @import url(); 引入css类 */
input {
    width: 100px;
    height: 40px;
    border-radius: 10px;
}
</style>