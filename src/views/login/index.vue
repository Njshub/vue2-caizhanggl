<template>
  <div class="login-container">
    <!-- :rules="loginRules"   验证正则 -->
    <el-form ref="loginForm" :model="loginForm" class="login-form" autocomplete="on" label-position="left">
      <div class="title-container">
        <h3 class="title">Login</h3>
      </div>
      <!-- 用户名称 -->
      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input
          ref="username"
          v-model="loginForm.username"
        />
      </el-form-item>
      <!-- 用户密码 -->
      <el-tooltip v-model="capsTooltip" content="Caps lock is On" placement="right" manual>
        <el-form-item prop="password">
          <span class="svg-container">
            <svg-icon icon-class="password" />
          </span>
          <el-input
            :key="passwordType"
            ref="password"
            v-model="loginForm.password"
          />
        </el-form-item>
      </el-tooltip>
      <!-- 提交 -->
      <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click="handleLogin">Login</el-button>
    </el-form>
    <!-- <el-button @click="Getkemu">获取科目</el-button> -->
    <el-dialog title="Or connect with" :visible.sync="showDialog">
      Can not be simulated on local, so please combine you own business simulation! ! !
      <br>
      <br>
      <br>
      <social-sign />
    </el-dialog>
  </div>
</template>

<script>
// import { validUsername } from '@/utils/validate'
import SocialSign from './components/SocialSignin'
import { login } from '../../api/user.js'
// import { error } from 'console'
// import axios from 'axios'

export default {
  name: 'Login',
  components: { SocialSign },
  data() {
    return {
      loginForm: {
        username: '15578697758',
        password: 'ytkj0715'
      },
      passwordType: 'password',
      capsTooltip: false,
      loading: false,
      showDialog: false,
      redirect: undefined,
      otherQuery: {}
    }
  },
  methods: {
    // checkCapslock(e) {
    //   const { key } = e
    //   this.capsTooltip = key && key.length === 1 && (key >= 'A' && key <= 'Z')
    // },
    // showPwd() {
    //   this.passwordType = this.passwordType === 'password' ? '' : 'password'
    //   this.$nextTick(() => {
    //     this.$refs.password.focus()
    //   })
    // },
    handleLogin() {
      const data = {
        username: this.username,
        password: this.password
      }
      login(data).then(() => {
        this.$router.push({
          name: 'login'
        })
      })
      // this.$refs.loginForm.validate(async valid => {
      //   console.log(valid, '22233')
      //   if (valid) {
      //     console.log(valid, '11111')
      //     this.loading = true
      //     try {
      //       const response = await login(this.loginForm)
      //       console.log('Login response:', response) // 添加日志
      //       if (response.data.success) {
      //         this.$router.push({ path: this.redirect || '/', query: this.otherQuery })
      //         console.log('登录成功')
      //       } else {
      //         this.$message.error(response.data.message)
      //         console.log('登录错误11111')
      //       }
      //     } catch (error) {
      //       console.error('登录失败', error)
      //       this.$message.error('登录失败或是密码错误')
      //     } finally {
      //       this.loading = false
      //     }
      //   } else {
      //     console.log('error submit!!')
      //     return false
      //   }
      // })
    }
  }
}
</script>

<style lang="scss">
$bg:#283443;
$light_gray:#fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }
  D:\vue-element-admin-master\public\index.html
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }

  .thirdparty-button {
    position: absolute;
    right: 0;
    bottom: 6px;
  }

  @media only screen and (max-width: 470px) {
    .thirdparty-button {
      display: none;
    }
  }
}
</style>
