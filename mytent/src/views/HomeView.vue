<template>
  <div class="home">
    <HelloWorld @submit="listener" />
    <div class="bvs">
      <div class="budiw">
        <div class="hwehi"><b class="bop">斗罗大陆</b>---看过</div>

        <div class="hais">当前时间：{{ currentTime }}</div>
      </div>
      <el-divider></el-divider>

      <div class="budi">
        《斗罗大陆》讲述了穿越到斗罗大陆的唐三如何一步步修炼武魂，由人修炼为神，最终铲除了斗罗大陆上的邪恶力量，报了杀母之仇，成为斗罗大陆最强者 [1]。
      </div>
    </div>
    <div class="bvs" v-for="(item, index) in arr" :key="index">
      <div class="budiw">
        <div class="hwehi">
          <b class="bop">{{ item.input }}</b>---{{ item.radio }}
        </div>

        <div class="hais">当前时间：{{ currentTime }}</div>
      </div>

      <el-divider></el-divider>

      <div class="budi">{{ item.textarea }}</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'


export default {
  name: "HomeView",
  components: {
    HelloWorld
  },
  data() {
    return {
      currentTime: '',
      arr: []
    }
  },
  methods: {
    listener(add) {
      this.arr.push(add)
    },
    getCurrentTime() {
      const now = new Date()
      const year = now.getFullYear()
      const month = this.formatTime(now.getMonth() + 1)
      const day = this.formatTime(now.getDate())
      const hour = this.formatTime(now.getHours())
      const minute = this.formatTime(now.getMinutes())
      const second = this.formatTime(now.getSeconds())
      this.currentTime = `${year}-${month}-${day} ${hour}:${minute}:${second}`
    },
    formatTime(time) {
      if (time < 10) {
        return '0' + time
      } else {
        return time
      }
    }
  },
  mounted() {
    this.getCurrentTime()
  }
}
</script>
<style>
.bop {
  color: yellow !important;
}

.hais {
  width: 240px;
  float: left;
}

.hwehi {
  width: 700px;
  float: left;
}

.budiw {
  text-align: left;
  width: 1200px;
  margin-top: 20px;
  margin-left: 20px;
  height: 15px;
}

.bvs {
  width: 1200px;
  margin: auto;
  height: 200px;
  margin-top: 30px;
  border: solid 4px #ccc;
}

.budi {
  line-height: 30px;
  text-align: left;
  width: 950px;
  height: 80px;
  margin-top: -10px;
  padding-left: 30px;
}

li {
  list-style: none;
}

h4 {
  text-align: center;
}
</style>