<template>
  <div class="home">
    <HelloWorld class="home-list">
      <!-- 具名插槽 -->
      <ul>
        <li v-for=" (item, index) in arr" :key="item.ID" v-color="index">
          <a href="#">{{ item.name }}</a>
          <h3>{{ item.age }}</h3>
        </li>
      </ul>
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
  },
  directives: {
    color(el, binding) {
      const value = binding.value;
      if (value % 2 == 0) {
        el.style.color = "#7303c0";
      }
    }
  },
  data() {
    return {
      arr: [
        { ID: 1, name: '张三', age: 20 },
        { ID: 2, name: '李四', age: 25 },
        { ID: 3, name: '王五', age: 30 },
        { ID: 4, name: '赵六', age: 35 }
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

a {
  text-decoration: none;
  color: red;
}

ul {
  list-style: none;
}
</style>