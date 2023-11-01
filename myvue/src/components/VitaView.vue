<!--  -->
<template>
    <div class="">
        <div id="box" ref="box" :style="{ background: currentColor, height: '100px', width: '100px' }"></div>
        <button v-for="item in background" :key="item" @click="toggle(item)">{{ item }}</button>
        <hr>
        <table border="1">
            <thead>
                <th>ID</th>
                <th>姓名</th>
                <th>年龄</th>
            </thead>
            <tbody>
                <tr v-for="item in sortedPersons" :key="item.id">
                    <th>{{ item.id }}</th>
                    <th>{{ item.name }}</th>
                    <th>{{ item.age }}</th>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentColor: "",
            background: ["red", "green", "yellow", "blue"],
            student: [
                { id: 1, name: '张三', age: 20 },
                { id: 2, name: '李四', age: 21 },
                { id: 3, name: '王五', age: 22 },
                { id: 4, name: '赵六', age: 23 },
                { id: 5, name: '钱七', age: 24 },
                { id: 6, name: '孙八', age: 25 },
                { id: 7, name: '周九', age: 26 },
                { id: 8, name: '吴十', age: 27 },
                { id: 9, name: '郑十一', age: 28 },
                { id: 10, name: '王十二', age: 29 }
            ]
        }
    },
    methods: {
        toggle(item) {
            // this.currentColor = item
            this.$refs.box.style.background = item
        }
    },
    computed: {
        sortedPersons() {
            return this.student.slice().sort((a, b) => b.age - a.age)
        }
    },
    created() {
        this.student.sort((a, b) => b.age - a.age)
    },
    mounted() {

    }
}
</script>
<style lang="less" scoped>
/* @import url(); 引入css类 */
table {
    width: 500px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-top: 300px;
}

#box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #2e317c;
}
</style>