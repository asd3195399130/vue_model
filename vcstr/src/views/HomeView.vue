<template>
  <div class="home">
    <!-- <HelloWorld /> -->
    <div class="header">
      <img src="../assets/微信截图_20231102091851.png" alt="">
    </div>
    <div class="center">
      <img src="https://dimg04.c-ctrip.com/images/zg051a0000018ihml577E.jpg" alt="">
    </div>
    <div class="footer">
      <img src="../assets/微信截图_20231102091949.png" alt="">
    </div>
    <div class="login-code" @click="toggleComponent">
      <a href="#">{{ text }}
        <i class="icon-ercode"></i>
      </a>
    </div>
    <!-- <ScanCode></ScanCode> -->
    <component :is="componentId"></component>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import ScanCode from '@/components/ScanCode.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    ScanCode
  },
  data() {
    return {
      componentId: "HelloWorld",
      text: "扫码登录",
    }
  }, methods: {
    toggleComponent() {
      // alert("Hello World")
      if (this.componentId === "HelloWorld") {
        this.componentId = "ScanCode"
        this.text = "账号登录"
      } else {
        this.componentId = "HelloWorld"
        this.text = "扫码登录"
      }
    }
  }
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
}

.header img {
  width: 100%;
}

.center img {
  width: 100%;
  margin-top: -4px;
}

.footer img {
  width: 100%;
}

.Scan {
  width: 380px;
  height: 420px;
  background: #ffffff;
  position: absolute;
  top: 23%;
  right: 18%;
  padding: 30px 30px 20px;
}

.logon {
  width: 380px;
  height: 420px;
  background: #ffffff;
  position: absolute;
  top: 15%;
  right: 10%;
  /* // transform: translate(-50%, -50%); */
  padding: 30px 30px 20px;
}


@media (max-width: 1920px) {
  .login-code {
    position: absolute;
    top: 30%;
    right: 15%;
    width: auto;
    height: auto;
    margin-right: 10px;
    padding: 0;
    background: #3882E5;
    -webkit-box-shadow: 0 1px 6px 0 rgba(0, 0, 0, .1);
    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, .1);
  }

  .login-code a {
    text-decoration: none;
    color: #FFF;
    line-height: 16px;
    padding: 9px;
    width: 29px;
    height: 94px;
    display: block;
  }

  .icon-ercode {
    width: 13px;
    height: 13px;
    display: inline-block;
    vertical-align: middle;
    background: url(https://pic.c-ctrip.com/platform/online/login/un_login_20170818.png)-20px 0 no-repeat;
  }
}

@media (max-width:1500px) {
  .logon {
    width: 380px;
    height: 420px;
    background: #ffffff;
    position: absolute;
    top: 15%;
    right: 11%;
    /* // transform: translate(-50%, -50%); */
    padding: 30px 30px 20px;
  }

  .login-code {
    position: absolute;
    top: 21%;
    right: 11%;
    width: auto;
    height: auto;
    margin-right: 12px;
    padding: 0;
    background: #3882E5;
    -webkit-box-shadow: 0 1px 6px 0 rgba(0, 0, 0, .1);
    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, .1);
  }

  .login-code a {
    text-decoration: none;
    color: #FFF;
    line-height: 16px;
    padding: 9px;
    width: 29px;
    height: 94px;
    display: block;
  }
}
</style>
