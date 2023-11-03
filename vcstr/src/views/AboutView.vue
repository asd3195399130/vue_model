<!--  -->
<template>
    <div class="">
        <PersonWorld :myArray="myArray"></PersonWorld>
    </div>
</template>

<script>
export default {
    data() {
        return {
            myArray: [
                {
                    id: 1,
                    group: "苏州+乌镇+杭州3日2晚跟团旅游",
                    price: 699,
                    score: 4.9,
                    src: "https://dimg04.c-ctrip.com/images/300l12000000rva7m3963_C_160_160.jpg",
                    img: "https://pic.c-ctrip.com/flight/fuzzy/NKG/640.jpg",
                    number: 7037,
                    zero: "上海",
                    End: "南京",
                    ticket: 340,
                    startDate: "12-02",
                    EndDate: "12-03",
                    discount: 1.6
                }, {
                    id: 2,
                    group: "浙江普陀山2日1晚团游",
                    price: 358,
                    score: 4.8,
                    src: "https://dimg04.c-ctrip.com/images/100p0b00000057x0o1540_C_160_160.jpg",
                    img: "https://pic.c-ctrip.com/flight/fuzzy/DLC/640.jpg",
                    number: 27323,
                    zero: "上海",
                    End: "大连",
                    ticket: 370,
                    startDate: "11-24",
                    EndDate: "11-27",
                    discount: 1.2
                }, {
                    id: 3,
                    group: "江苏天目湖2日1晚跟团游",
                    price: 599,
                    score: 4.9,
                    src: "https://dimg04.c-ctrip.com/images/30030u000000jhsv99F6C_C_160_160.jpg",
                    img: "https://pic.c-ctrip.com/flight/fuzzy/CGO/640.jpg",
                    number: 321,
                    zero: "上海",
                    End: "郑州",
                    ticket: 390,
                    startDate: "11-11",
                    EndDate: "11-12",
                    discount: 1.4
                }, {
                    id: 4,
                    group: "苏州+乌镇+杭州3日2晚跟团旅游",
                    price: 1007,
                    score: 4.9,
                    src: "https://dimg04.c-ctrip.com/images/0303u120006swk805EF4A_C_160_160.jpg",
                    img: "https://pic.c-ctrip.com/flight/fuzzy/HFE/640.jpg",
                    number: 21227,
                    zero: "上海",
                    End: "合肥",
                    ticket: 398,
                    startDate: "12-01",
                    EndDate: "12-03",
                    discount: 1.9
                }, {
                    id: 5,
                    group: "黄山风景区3日2晚跟团游",
                    price: 699,
                    score: 5.0,
                    src: "https://dimg04.c-ctrip.com/images/300j14000000x3hz0C4AC_C_160_160.jpg",
                    img: "https://pic.c-ctrip.com/flight/fuzzy/HAK/640.jpg",
                    number: 7037,
                    zero: "上海",
                    End: "海口",
                    ticket: 398,
                    startDate: "12-02",
                    EndDate: "12-03",
                    discount: "1.0"
                }
            ]
        }
    },
    methods: {
        togg() {

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
#box {
    width: 500px;
    height: 500px;
    background-color: red;
}
</style>