<template>
  <div class="login">
    <el-form label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="btn" type="success" @click.prevent="register">注册</el-button>
        <el-button class="btn" type="success" @click.prevent="login">登陆</el-button>
        <el-button class="btn" type="success" @click.prevent="profile">个人信息</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getLogin } from "../api/login";
import { getProfile } from "../api/profile";
import { getRegister } from "../api/register";

export default {
  name: "App",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    register() {
      getRegister({ username: this.username, password: this.password }).then(
        (res) => {
          if (res.data.code == "003") {
            alert("用户名已存在");
            return;
          }
          alert("注册成功");
        }
      ).catch((err)=>{});
    },
    login() {
      getLogin({ username: this.username, password: this.password }).then(
        (res) => {
          if (res.data.code == "001" || res.data.code == "002") {
            alert("用户名或密码错误");
            return;
          }
          localStorage.setItem("token", res.data.token);
          alert("登录成功");
        }
      ).catch((err)=>{});
    },
    profile() {
      if (localStorage.getItem("token") == null) {
        alert("请登录");
        return;
      }
      getProfile().then((res) => {
        // console.log(res.data);
        if (res.data.code == "000") {
          // window.location.href = 'http://www.baidu.com';
          alert("请重新登录");
          return;
        }
        alert(`用户名：${res.data.username}\n密    码：${res.data.password}`);
      }).catch((err)=>{});
    },
  },
};
</script>

<style lang='scss'>
.el-form {
  width: 400px;
}
</style>
