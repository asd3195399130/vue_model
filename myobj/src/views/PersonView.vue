<template>
  <div id="box">
    <form class="form" @submit.prevent="addbtn">
      <div class="form-group">
        <label for="name">姓名</label>
        <input type="text" id="name" name="name" required v-model="username" />
      </div>
      <div class="form-group">
        <label for="avatar">头像</label>
        <input type="file" name="" id="file" @change="handler" style="display: none" />
        <img :src="header" alt="" @click="fun" />
      </div>
      <div class="form-group">
        <label for="nickname">昵称</label>
        <input type="text" id="nickname" name="nickname" required v-model="nickname" />
      </div>
      <div class="form-group">
        <label>性别</label>
        <div class="radio-group">
          <input type="radio" id="male" name="gender" value="男" required v-model="sex" />
          <label for="男">男</label>
          <input type="radio" id="female" name="gender" value="女" v-model="sex" required />
          <label for="女">女</label>
        </div>
      </div>
      <div class="form-group">
        <label for="birthdate">出生日期</label>
        <input type="date" id="birthdate" name="birthdate" required v-model="datetime" />
      </div>
      <div class="form-group">
        <label for="hometown">籍贯</label>
        <select id="province" name="province" required v-model="selectprovince" @change="citybtn">
          <option v-for="(citys, index) in citys" :key="index" :value="citys">
            {{ citys.name }}
          </option>
        </select>
        <select id="city" name="city" required @change="citychange" v-model="selectcity">
          <option v-for="(city, index) in citys " :key=index :value="city">
            {{ city.name }}
          </option>
        </select>
        <select id="district" name="district" required v-model="selectdistrict">
          <option v-for="(disiricts, index) in disiricts" :key="index" :value="disiricts">
            {{ disiricts }}
          </option>
        </select>
      </div>
      <div class="form-group">
        <label for="phone">手机号码</label>
        <input type="tel" id="phone" name="phone" pattern="[0-9]{11}" required />
      </div>
      <div class="form-group">
        <label for="email">电子邮箱</label>
        <input type="email" id="email" name="email" required v-model="email" />
      </div>
      <div class="form-group">
        <label for="date">入职时间</label>
        <input type="date" name="" id="" />
      </div>
      <button type="submit">提交</button>
    </form>
  </div>
</template>
<script>
import { citys } from "../assets/city";
export default {
  data() {
    return {
      citys: citys,
      cities: [],
      disiricts: [],
      selectprovince: 0,
      selectcity: 0,
      selectdistrict: 0,
      sex: "",
      username: "",
      nickname: "",
      header: "https://img0.baidu.com/it/u=1997330805,2252719449&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1698771600&t=b7ebbcf3dea10b1f60e41624fd723344",
      datetime: "",
      email: "",
    }
  },

  methods: {
    citybtn() {
      this.cities = this.selectprovince.city;
      console.log(this.cities);
      this.selectcity = "";
      this.selectdistrict = "";
    },
    citychange() {
      this.disiricts = this.selectcity.area;
      console.log(this.disiricts);
      this.selectdistrict = "";
    },
    handler(event) {
      console.log(event.target);
      const file = event.target.files[0];
      this.header = URL.createObjectURL(file);
    },
    fun() {
      this.file.click();
    },
    addbtn() {
      console.log(
        this.selectprovince.city.name,
        this.selectcity,
        this.selectdistric,
        this.sex,
        this.username,
        this.nickname,
        this.header,
        this.datetime
      );
    },
  },
  created() {
    // console.log(citys);
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

#box {
  width: 1000px;
  /* height: 20vh; */
  background-color: red;
  margin: auto;
}

form {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-group {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}

label {
  display: inline-block;
  font-weight: bold;
  margin-bottom: 5px;
  /* display: flex; */
}

input[type="text"],
input[type="email"],
input[type="tel"],
input[type="date"] {
  display: inline-block;
  width: 50%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 16px;
  margin-left: 20px;
}

input[type="redio"]:nth-child(1) {
  margin-left: 20px;
}

.radio-group label {
  margin-right: 20px;
}

select {
  display: inline-block;
  width: 30%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 16px;
  margin-left: 20px;
}

button[type="submit"] {
  display: block;
  margin-top: 20px;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #0062cc;
}

img {
  width: 146px;
  height: 146px;
}
</style>
