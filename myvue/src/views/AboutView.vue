<template>
  <div class="home">
    <HelloWorld>
      <!-- 具名插槽 -->
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>名字</th>
            <th>性别</th>
            <th>年龄</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in student" :key="index">
            <td>{{ item.ID }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.sex }}</td>
            <td>{{ item.age }}</td>
          </tr>
        </tbody>
      </table>
    </HelloWorld>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'


export default {
  name: 'HomeView',
  components: {
    HelloWorld,
  }
  , data() {
    return {
      student: [
        { ID: 1, name: '张三', sex: '男', age: 20 },
        { ID: 2, name: '李四', sex: '男', age: 25 },
        { ID: 3, name: '王五', sex: '男', age: 30 },
        { ID: 4, name: '赵六', sex: '男', age: 35 },
        { ID: 5, name: '陈丽', sex: '女', age: 22 },
        { ID: 6, name: '刘芳', sex: '女', age: 28 },
        { ID: 7, name: '杨洋', sex: '男', age: 24 },
        { ID: 8, name: '徐静蕾', sex: '女', age: 30 },
        { ID: 9, name: '赵大雄', sex: '男', age: 45 },
        { ID: 10, name: '孙小美', sex: '女', age: 27 }
      ]

    }
  }
}
</script>
<style>
.home {
  width: 1200px;
  height: 800px;
  margin: auto;
  text-align: center;
}

table {
  width: 500px;
  border-collapse: collapse;
  margin: auto;
}
</style>