<!--  -->
<template>
    <div class="side">
        <ul>
            <li v-for="(item, index) in website" :key="item" :class="{ curstr: isactive === index }" @click="toggle(index)">
                <a href=" #" class="cur">{{ item }}</a>
            </li>
        </ul>
        <div v-if="flag === 0" class="mond">
            <ContentView></ContentView>
        </div>
        <div v-if="flag === 1" class="mond">
            <HelpView></HelpView>
        </div>
        <div v-if="flag === 2" class="mond">
            <CopyrightView></CopyrightView>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            website: ["关于本站", "下载帮助", "版权声明", "广告合作"],
            isactive: -1,
            flag: 0,
        }
    },
    methods: {
        toggle(index) {
            if (this.isactive === index) {
                this.isactive = -1
            } else {
                this.isactive = index
            }
            // console.log(index);
            if (this.flag === index) {
                this.flag = -1
            } else {
                this.flag = index
            }


            // this.website[index].isactive = !this.website[index].isactive
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


.mond {
    margin-top: -155px;
}

.side {
    margin: 0;
    width: 165px;
    height: 320px;
    float: left;
    border: 2px solid #e5e5e5
}

ul {
    list-style: none;
}

li {
    height: 34px;
    line-height: 34px;
    margin: 4px 0;
    text-align: 20px;
}

li a {
    text-decoration: none;
    display: block;
    color: black;
    width: 149px;
    height: 34px;
    background: url(https://www.59370.com/app/images/arrow.gif)7px 12px no-repeat;
}

.cur:hover {
    background-color: #e5ffe4;
    border-top: 2px solid #3fb118;
    color: #3fb118;
    font-weight: bold;
    text-decoration: none;
    cursor: default;
}

.curstr:first-of-type a {
    background-color: #3fb118;
    color: #fff;
    background-image: url(https://www.59370.com/app/images/arrow.gif)7px 12px no-repeat;
}

.curstr a {
    background-color: #3fb118;
    color: #fff;
    background-image: url(https://www.59370.com/app/images/arrow.gif)7px 12px no-repeat;
}
</style>