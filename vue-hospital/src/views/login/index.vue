<template>
  <div class="login">
    <h1>欢迎</h1>
    <el-form label-width="80px" :model="userInfo" :rules="rules" ref="ruleForm">
      <el-form-item label="用户名" prop="userName">
        <el-input v-model="userInfo.userName"></el-input>
      </el-form-item>
      <el-form-item prop="password" label="密码">
        <el-input type="password" v-model="userInfo.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="btn" type="success" @click.prevent="loginHandle">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userInfo: {
        userName: "",
        password: "",
      },
      rules: {
        userName: [
          { required: true, message: "用户名不能为空" },
          { min: 6, max: 12, message: "长度为6-12字符", trigger: "blur" },
          {
            pattern: /^\w{6,12}$/,
            message: "请输入数字字母下滑线，长度6-12",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "密码不能为空" },
          {
            pattern: /^[A-Z]\w{5,11}/,
            message: "开头大写，长度6-12数字字母下划线",
          },
        ],
      },
    };
  },
  created () {
    if (this.$auth.loggedIn) {this.$router.push('/home'); console.log(123);}
  },
  methods: {
    loginHandle() {
      this.$refs.ruleForm
        .validate()
        .then((voild) => {
          // this.$axios
          //   .post("/login", {
          //     userName: this.userInfo.userName,
          //     password: this.userInfo.password,
          //   })
          //   .then((res) => {
          //     if (res.data.code != "2000") {
          //       alert("用户名或密码错误");
          //       return;
          //     }
          //     localStorage.setItem("token", res.data.token);
          //     alert("登录成功");
          //     this.$router.push("/user");
          //   })
          //   .catch((err) => {});
          console.log(this.$cookies.get(keyName));
          this.$auth.loginWith('local', { data:{userName: this.userInfo.userName,password: this.userInfo.password} })
        })
        .catch(() => {
          this.$message({
            message: "你输入内容不合法",
          });
        });
    },
  },
};
</script>

<style scoped>
.login {
  width: 100%;
  height: 100vh;
  background-color: #2d3a4b;
}
h1 {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
}
.el-form {
  width: 450px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.el-form .btn {
  width: 80%;
  margin: 10px 0 0 30px;
}
</style>