<!--  -->
<template>
  <div class="boos-home">
    <div class="boos">
      <div class="logo-home">
        <div class="logon">
          <h2>
            账号密码登录
            <a href="#">手机号查单
              <i>></i>
            </a>
          </h2>
          <div class="form-wrap">
            <form action="#">
              <dl>
                <dd>
                  <input type="text" name="" id="" placeholder="国内手机号/用户名/邮箱/卡号" class="r-input">
                </dd>
              </dl>
              <dl>
                <dd class="r-input input_auth">
                  <input type="text" placeholder="登陆密码" class="bbz-js-input">
                  <a href="#">忘记密码</a>
                </dd>
              </dl>
              <dl>
                <dd>
                  <input type="button" value="登录" class="form-btn">
                </dd>
              </dl>
            </form>
          </div>
          <div data-testid="agreementList" class="agreement-list">
            <div data-testid="checkboxAgreement" class="checkbox-agreement"
              style="border-color: rgb(179, 179, 179); margin-right: 4px;"><input type="checkbox"
                id="checkboxAgreementInput" autocomplete="off" class="agreement-checkbox"><label
                for="checkboxAgreementInput"></label></div>
            <div data-testid="agreementEntry" style="display: inline-block; vertical-align: middle;">阅读并同意携程的<a
                href="javascript:void(0)" data-testid="commonEntry" class="serviceAgreement">服务协议</a>和<a
                href="javascript:void(0)" data-testid="commonEntry" class="privacyPolicy">个人信息保护政策</a></div>
          </div>
          <div>
            <dl>
              <dd>
                <div class="login-set"><a href="javascript:void(0)" data-testid="commonEntry"
                    class="login-entry-dynamic">验证码登录</a><a href="javascript:void(0)" data-testid="commonEntry"
                    class="free-regist">免费注册</a></div>
              </dd>
            </dl>
          </div>


          <div class="login-about">
            <a href="javascript:void(0)" data-testid="commonEntry">境外手机</a>
            <span class="sep">|</span>
            <a href="javascript:void(0)" data-testid="commonEntry" class="companylogin">公司客户</a>
            <span class="sep">|</span>
            <a href="javascript:void(0)" data-testid="commonEntry" class="fuli">携程通</a>
          </div>
          <div class="login-other">
            <a href="javascript:void(0)" data-testid="commonEntry" class="icon-alipay">支付宝</a>
            <a href="javascript:void(0)" data-testid="commonEntry" class="icon-qq">QQ</a>
            <a href="javascript:void(0)" data-testid="commonEntry" class="icon-baidu">百度</a>
            <a href="javascript:void(0)" data-testid="commonEntry" class="icon-sina">新浪微博</a>
            <a href="javascript:void(0)" data-testid="commonEntry" class="icon-wechat">微信</a>
          </div>
        </div>



      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

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
  box-sizing: border-box;
}

.boos-name {
  position: relative;
}

.boos {
  position: absolute;
  top: 30%;
  right: 18%;
}

.logon {
  width: 380px;
  height: 420px;
  background: #ffffff;
  position: absolute;
  top: 15%;
  right: 20%;
  // transform: translate(-50%, -50%);
}


h2 {
  position: relative;
  padding-bottom: 16px;
  font-size: 18px;
  color: #111;
  line-height: 1;
  font-family: PingFangSC-Medium, "Microsoft YaHei", SimSun, Tahoma, Verdana, Arial, sans-serif;
  font-weight: 400;
}

h2 a {

  position: absolute;
  right: 0;
  font-size: 12px;
}

h2 a i {
  font-family: Simsun;
  font-style: normal;
  color: #bbb;
  font-size: 13px;
  font-weight: 700;
}

a {
  text-decoration: none;
  color: #666;
  outline: 0;
}

.form-wrap dl {
  padding: 8px 0;
  clear: both
}

.form-wrap dl::after {
  clear: both;
  content: "";
  display: block;
  height: "0";
  overflow: hidden;
}

.form-wrap .r-input {
  font-weight: 400;
  font-family: "Microsoft YaHei", SimSun, Tahoma, Verdana, Arial, sans-serif;
  position: relative;
  width: 300px;
  height: 40px;
  padding: 5px 5px 5px 13px;
  line-height: 28px;
  border: 1px solid #ccc;
  font-size: 14px;
  color: #333;
  display: inline-block;
  vertical-align: middle;
}

.input_auth {
  width: 225px;
  padding-right: 80px
}

.bbz-js-input {
  font-weight: 400;
  font-family: "Microsoft YaHei", SimSun, Tahoma, Verdana, Arial, sans-serif;
  border: none;
  width: 200px;
  height: 28px;
  line-height: 28px;
  outline: 0;
  font-size: 14px;
  background: #fff;
}

.input_auth a {
  position: absolute;
  right: 0;
  top: 0;
  width: 80px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 12px;
}

input[type="button"] {
  -webkit-appearance: none;
  background-color: #FF9A14;
  width: 100%;
  height: 42px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  border: 0;
  border-radius: 4px;
  clear: both;
}

.agreement-list {
  position: relative;
  color: #999;
  line-height: 12px;
  margin-top: 0;
  text-align: left;
  font-size: 12px;

}

.checkbox-agreement {
  display: inline-block;
  width: 14px;
  height: 14px;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 100%;
  position: relative;
  box-sizing: border-box;
  vertical-align: middle;
}

.agreement-list a {
  padding: 0 3px;
  color: #0086F6;
  border-bottom: none;
}

.checkbox-agreement {
  display: inline-block;
  width: 14px;
  height: 14px;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 100%;
  position: relative;
  box-sizing: border-box;
  vertical-align: middle;
}

.login-entry-dynamic {
  float: left;
  color: #0086F6;
  font-size: 12px;
}

.login-set {
  margin: 10px 0 18px;
}

.free-regist {
  float: right;
  color: #0086F6;
  font-size: 12px;
}

.checkbox-agreement label {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  height: 100%;
  width: 100%;
  border-radius: 100%;
}

.login-about {
  margin-top: 80px;
  font-size: 12px;
  margin-right: 132px
}

.login-about .sep {
  padding: 0 10px;
  color: #ccc;
}

.icon-alipay,
.icon-baidu,
.icon-qq,
.icon-renren,
.icon-sina,
.icon-wechat {
  width: 30px;
  height: 0;
  padding-top: 30px;
  overflow: hidden;
}

.login-other a {
  margin-right: 18px;
}

.icon-wechat:hover {
  width: 32px;
  height: 32px;
  transform: scale(1.2);
}

.icon-wechat {
  display: inline-block;
  background: url(https://pic.c-ctrip.com/platform/online/login/un_login_third.png)-140px 0px no-repeat;
  vertical-align: middle;
}

.icon-sina:hover {
  width: 32px;
  height: 32px;
  transform: scale(1.2);
}

.icon-sina {
  display: inline-block;
  background: url(https://pic.c-ctrip.com/platform/online/login/un_login_third.png)-105px 0px no-repeat;
  vertical-align: middle;
}

.icon-baidu:hover {
  width: 32px;
  height: 32px;
  transform: scale(1.2);
}

.icon-baidu {
  display: inline-block;
  background: url(https://pic.c-ctrip.com/platform/online/login/un_login_third.png)-70px 0px no-repeat;
  vertical-align: middle;
}

.icon-qq:hover {
  width: 32px;
  height: 32px;
  transform: scale(1.2);
}

.icon-qq {
  display: inline-block;
  background: url(https://pic.c-ctrip.com/platform/online/login/un_login_third.png)-35px 0 no-repeat;
  vertical-align: middle;
}

.icon-alipay:hover {
  width: 32px;
  height: 32px;
  transform: scale(1.2);
}

.icon-alipay {
  display: inline-block;
  background: url(https://pic.c-ctrip.com/platform/online/login/un_login_third.png) no-repeat;
  vertical-align: middle;
}

.login-other {
  width: 380px;
  font-size: 12px;
  text-align: left;
  margin-top: 15px
}

@media (max-width: 1920px) {
  .header img {
    width: 100%;
  }

  .center img {
    width: 100%;
    height: 540px;
    margin-top: -4px;
  }

  .footer img {
    width: 100%;
  }

  .boos-name {
    position: relative;
  }

  .boos {
    position: absolute;
    top: 30%;
    right: 18%;
  }

  .logon {
    width: 380px;
    height: 420px;
    background: #ffffff;
    position: absolute;
    top: 15%;
    right: 20%;
    padding: 30px 30px 20px;
    // transform: translate(-50%, -50%);
  }

  .login-code {
    position: absolute;
    top: 16%;
    right: 18%;
    width: auto;
    height: auto;
    margin-right: 7px;
    padding: 0;
    background: #3882E5;
    -webkit-box-shadow: 0 1px 6px 0 rgba(0, 0, 0, .1);
    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, .1);
  }

  .login-code a {
    text-decoration: none;
    font-size: 13px;
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

  h2 {
    position: relative;
    padding-bottom: 16px;
    font-size: 18px;
    color: #111;
    line-height: 1;
    font-family: PingFangSC-Medium, "Microsoft YaHei", SimSun, Tahoma, Verdana, Arial, sans-serif;
    font-weight: 400;
    text-align: left;
  }

  h2 a {

    position: absolute;
    right: 0;
    font-size: 12px;
  }

  h2 a i {
    font-family: Simsun;
    font-style: normal;
    color: #bbb;
    font-size: 13px;
    font-weight: 700;
  }

  a {
    text-decoration: none;
    color: #666;
    outline: 0;
  }

  .form-wrap dl {
    padding: 8px 0;
    clear: both
  }

  .form-wrap dl::after {
    clear: both;
    content: "";
    display: block;
    height: "0";
    overflow: hidden;
  }

  .form-wrap .r-input {
    font-weight: 400;
    font-family: "Microsoft YaHei", SimSun, Tahoma, Verdana, Arial, sans-serif;
    position: relative;
    width: 300px;
    height: 40px;
    padding: 5px 5px 5px 13px;
    line-height: 28px;
    border: 1px solid #ccc;
    font-size: 14px;
    color: #333;
    display: inline-block;
    vertical-align: middle;
  }

  .input_auth {
    width: 225px;
    padding-right: 80px
  }

  .bbz-js-input {
    font-weight: 400;
    font-family: "Microsoft YaHei", SimSun, Tahoma, Verdana, Arial, sans-serif;
    border: none;
    width: 200px;
    height: 28px;
    line-height: 28px;
    outline: 0;
    font-size: 14px;
    background: #fff;
  }

  .input_auth a {
    position: absolute;
    right: 0;
    top: 0;
    width: 80px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 12px;
  }

  .agreement-list {
    position: relative;
    color: #999;
    line-height: 12px;
    margin-top: 0;
    text-align: left;
  }

  .checkbox-agreement {
    display: inline-block;
    width: 14px;
    height: 14px;
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 100%;
    position: relative;
    box-sizing: border-box;
    vertical-align: middle;
  }

  .agreement-list a {
    padding: 0 3px;
    color: #0086F6;
    border-bottom: none;
  }

}

@media (max-width:1500px) {
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

  .boos-name {
    position: relative;
  }

  .boos {
    position: absolute;
    top: 20%;
    right: 15%;
  }



  h2 {
    position: relative;
    padding-bottom: 16px;
    font-size: 18px;
    color: #111;
    line-height: 1;
    font-family: PingFangSC-Medium, "Microsoft YaHei", SimSun, Tahoma, Verdana, Arial, sans-serif;
    font-weight: 400;
    text-align: left;
  }

  h2 a {

    position: absolute;
    right: 0;
    font-size: 12px;
  }

  h2 a i {
    font-family: Simsun;
    font-style: normal;
    color: #bbb;
    font-size: 13px;
    font-weight: 700;
  }

  a {
    text-decoration: none;
    color: #666;
    outline: 0;
  }

  .form-wrap dl {
    padding: 8px 0;
    clear: both
  }

  .form-wrap dl::after {
    clear: both;
    content: "";
    display: block;
    height: "0";
    overflow: hidden;
  }

  .form-wrap .r-input {
    font-weight: 400;
    font-family: "Microsoft YaHei", SimSun, Tahoma, Verdana, Arial, sans-serif;
    position: relative;
    width: 300px;
    height: 40px;
    padding: 5px 5px 5px 13px;
    line-height: 28px;
    border: 1px solid #ccc;
    font-size: 14px;
    color: #333;
    display: inline-block;
    vertical-align: middle;
  }

  .input_auth {
    width: 225px;
    padding-right: 80px
  }

  .bbz-js-input {
    font-weight: 400;
    font-family: "Microsoft YaHei", SimSun, Tahoma, Verdana, Arial, sans-serif;
    border: none;
    width: 200px;
    height: 30px;
    line-height: 30px;
    outline: 0;
    font-size: 14px;
    background: #fff;
  }

  .input_auth a {
    position: absolute;
    right: 0;
    top: 0;
    width: 80px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 12px;
  }

  .agreement-list {
    position: relative;
    color: #999;
    line-height: 12px;
    margin-top: 0;
    text-align: left;
  }

  .checkbox-agreement {
    display: inline-block;
    width: 14px;
    height: 14px;
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 100%;
    position: relative;
    box-sizing: border-box;
    vertical-align: middle;
  }

  .agreement-list a {
    padding: 0 3px;
    color: #0086F6;
    border-bottom: none;
  }
}</style>