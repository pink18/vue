// 引入 mysql 连接数据库
const mysql = require("mysql");
const cors = require("cors");

// 数据库配置
// 我是利用 sqlyog 可视化工具建立的数据库 并且建立相应的表 user
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  port: 3306,
  database: "app",
});
// 定义一个执行 sql 语句的函数 并且返回一个 promise 对象
const exec = (sql) => {
  const promise = new Promise((resolve, reject) => {
    con.query(sql, (err, result) => {
      resolve(result);
    });
  });
  return promise;
};
// 连接数据库
con.connect();

// 引入其他相关包
const express = require("express");
var bodyParser = require("body-parser");
var bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// 创建服务器
const app = express();
// 解析 post 请求体
app.use(bodyParser.json({ limit: "1mb" })); //body-parser 解析json格式数据
app.use(
  bodyParser.urlencoded({
    //此项必须在 bodyParser.json 下面,为参数编码
    extended: true,
  })
);

app.use(cors());
// 此变量为解析 token 密匙 变量比较隐私  应该放在其他地方 本文章简单使用一下
// 值为开发者随意设定的
const SECRET = "asdfjoijisadfjlkj";

// 监听3001端口
app.listen(3001, () => {
  console.log("服务器启动");
});

app.post("/register", (req, res) => {
  const repeat = `select * from user where username='${req.body.username}'`;
  exec(repeat).then((result) => {
    if (result.length != 0) {
      res.json({
        code: "003",
        message: "用户名已存在",
      });
      return;
    }
    const username = req.body.username;
    // 密码进行加密
    const password = bcrypt.hashSync(req.body.password, 10);
    const sql = `insert into user (username, password) values ('${username}', '${password}')`;
    exec(sql).then((result) => {
      return;
    });
    res.json({
      code: "2000",
      message: "注册成功",
    });
  });
});

app.post("/login", (req, res) => {
  // 从请求中获取请求体
  const { username, password } = req.body;
  const sql = `select * from user where username='${username}'`;
  exec(sql).then((result) => {
    const user = result[0];
    // 如果查询不到用户
    if (!user) {
      res.json({
        code: "001",
        message: "用户名无效",
      });
      return;
    }
    // 判断用户输入的密码和数据库存储的是否对应 返回 true 或者 false
    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) {
      res.json({
        code: "002",
        message: "密码错误",
      });
      return;
    }

    // 生成 token 将用户的唯一标识 id 作为第一个参数
    // SECRET 作为取得用户 id 密匙
    const token = jwt.sign({ id: user.id }, SECRET, {
      expiresIn: 100,
    });
    // 如果都通过了 则返回user 和 token
    // 返回的 token 应该存储在客户端 以便后续发起请求需要在请求头里设置
    res.send({ user, token });
  });
});

app.get("/profile", (req, res) => {
  // 从请求头里取出 token
  const token = req.headers.authorization;
  // token 验证取得 用户 id
  jwt.verify(token, SECRET, (err, data) => {
    if (err) {
      res.json({
        code: "000",
        message: "无效token",
      });
      return;
    }
    let timer = new Date().getTime() / 1000;

    if (timer > data.exp) {
      res.json({
        code: "000",
        message: "无效token",
      });
      return;
    }
    const { id } = jwt.verify(token, SECRET);
    // 查询用户
    const sql = `select * from user where id='${id}'`;
    exec(sql).then((result) => {
      // 返回用户信息
      res.send(result[0]);
    });
  });
});
