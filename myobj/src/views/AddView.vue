<template>
    <div class="">
        <div>
            <form action="#" @submit.prevent="addbtn">
                学生姓名： <input type="text" v-model="username" required><br>
                学生年龄： <input type="text" v-model="age" required><br>
                学生性别： <input type="text" v-model="sex" required><br>
                学生成绩： <input type="text" v-model="score" required><br>
                <el-button type="success" native-type="submit">{{ text }}</el-button>
            </form>
        </div>

        <div>
            搜索：<input type="text" v-model="schers" required @keyup.enter="search">
            <el-button type="success" @click="search">搜索</el-button>
        </div>
        <!-- 排序 -->
        <div>
            <el-button type="primary" @click="sorts">升序</el-button>
            <el-button type="success" @click="sortos">降序</el-button>
        </div>
        <!-- 筛选成绩及格和不及格 -->
        <div>
            <div>
                <label>筛选：</label>
                <select v-model="filterOption">
                    <option value="all">全部</option>
                    <option value="pass">及格</option>
                    <option value="fail">不及格</option>
                </select>
            </div>
            <!-- <el-button type="success" @click="scores">不及格</el-button>
            <el-button type="primary" @click="scoress">及格</el-button> -->
        </div>

        <table border="1">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>姓名</th>
                    <th>性别</th>
                    <th>年龄</th>
                    <th>成绩</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in  filteredStudents " :key="index"
                    :class="{ 'pass': item.score >= 60, 'fail': item.score < 60 }">
                    <td>{{ item.id }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.gender }}</td>
                    <td>{{ item.age }}</td>
                    <td>{{ item.score }}</td>
                    <td>
                        <span v-if="item.score >= classAerge">及格</span>
                        <span v-else>不及格</span>
                    </td>
                    <td>
                        <el-button type="primary" @click="edit(index)">编辑</el-button>
                        <el-button type="warning" @click="del(index)">删除</el-button>
                    </td>
                </tr>
            </tbody>
        </table>
        <h1>平均分：{{ classAerge }}</h1>
        <!-- 修改 -->





    </div>
</template>

<script>
export default {
    data() {
        return {
            username: "",
            age: "",
            score: "",
            sex: "",
            schers: "",
            filterOption: "all",
            text: "提交",
            editIndex: null,
            mark: [
                {
                    id: 1,
                    name: "花椒",
                    gender: "女",
                    score: 60,
                    age: 20,
                },
                {
                    id: 2,
                    name: "青椒",
                    gender: "男",
                    score: 70,
                    age: 15,
                }, {
                    id: 3,
                    name: "胡椒",
                    gender: "男",
                    score: 80,
                    age: 19,
                }, {
                    id: 4,
                    name: "姜",
                    gender: "男",
                    score: 90,
                    age: 17,
                }, {
                    id: 5,
                    name: "蒜",
                    gender: "男",
                    score: 100,
                    age: 16,
                }, {
                    id: 6,
                    name: "洋葱",
                    gender: "女",
                    score: 50,
                    age: 21,
                }, {
                    id: 7,
                    name: "西瓜",
                    gender: "女",
                    score: 40,
                    age: 22,
                }, {
                    id: 8,
                    name: '杜康',
                    gender: '男',
                    score: 30,
                    age: 23,
                }, {
                    id: 9,
                    name: "小兰",
                    gender: "女",
                    score: 20,
                    age: 18,
                }
            ],
        };
    },
    methods: {
        // 添加按钮
        addbtn() {
            if (this.text === "提交") {
                let arr = {
                    id: this.mark.length + 1,
                    name: this.username,
                    age: this.age,
                    gender: this.sex,
                    score: this.score,
                }
                this.mark.push(arr)
                this.username = '';
                this.sex = '';
                this.score = '';
                this.age = '';
            } else if (this.text === "保存") {
                this.mark[this.editIndex].name = this.username;
                this.mark[this.editIndex].age = this.age;
                this.mark[this.editIndex].gender = this.sex;
                this.mark[this.editIndex].score = this.score;
                this.text = "提交"
            }

            this.username = '';
            this.sex = '';
            this.score = '';
            this.age = '';
        },
        del(index) {
            if (confirm("确定删除吗？")) {
                this.mark.splice(index, 1)
            }
        },
        //搜索
        search() {
            // console.log(this.schers);
            if (this.schers === "") {
                return alert("请输入搜索内容")
            }
            const resluts = [];
            const keywork = this.schers.toLowerCase()
            for (let i = 0; i < this.mark.length; i++) {
                if (this.mark[i].name.toLowerCase().indexOf(keywork) !== -1) {
                    resluts.push(this.mark[i])
                }
            }
            this.mark = resluts
            // console.log(this.mark);

        },
        sorts() {
            return this.mark.sort((a, b) => a.score - b.score)
        },
        sortos() {
            return this.mark.sort((a, b) => b.score - a.score)
        },

        // 修改
        edit(index) {
            // console.log(index);
            this.text = "保存"
            this.id = this.mark[index].id;
            this.username = this.mark[index].name;
            this.age = this.mark[index].age;
            this.sex = this.mark[index].gender;
            this.score = this.mark[index].score;
            this.editIndex = index;


            console.log(this.editIndex);

        }
    },
    computed: {
        classAerge() {
            let mrkindex = 0
            this.mark.forEach((item) => {
                mrkindex += Number(item.score)
            })
            return Math.round(mrkindex / this.mark.length)
        },
        filteredStudents() {
            if (this.filterOption === "all") {
                return this.mark;
            } else if (this.filterOption === "pass") {
                return this.mark.filter(item => item.score >= 60);
            } else if (this.filterOption === "fail") {
                return this.mark.filter(item => item.score < 60);
            }
            return [];
        }

    },
    created() { },
    mounted() { },
};
</script>
<style lang="less" scoped>
/* @import url(); 引入css类 */
* {
    margin: 0;
    padding: 0;
}

.pass {
    background-color: green;
    color: yellow
}

.fail {
    background-color: #c0c0c0;
    color: rgb(15, 15, 15);
}

table {
    width: 1200px;
    border: 1px solid black;
    border-collapse: collapse;
    margin: 0 auto;
}

button {
    content: "";
    width: 80px;
    height: 30px;
    border: none;
    margin-left: 10px;
}

tr {
    height: 30px;
}

input {
    width: 260px;
    height: 30px;
    border-radius: 10px;
}
</style>
