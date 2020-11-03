const app = require("express")();
const mysql = require("mysql");
var bodyParser = require("body-parser");
var jwt = require('jsonwebtoken')

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  port: 3306,
  database: "app"
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

// 解析 post 请求体
app.use(bodyParser.json({ limit: "1mb" })); //body-parser 解析json格式数据
app.use(
  bodyParser.urlencoded({
    //此项必须在 bodyParser.json 下面,为参数编码
    extended: true,
  })
);

app.listen(3001, () => {
    console.log("服务器启动");
});

app.get("/goodList", (req, res) => {
  //   res.send('Hello World!')
  const repeat = `select * from goods limit 1,30`;
  exec(repeat).then(data => {
    res.json({
      code: "2000",
      message: "获取成功",
      data
    });
  });
});

app.post("/login", function (req, res) {
  //  接收请求参数
  console.log(req);
  let params = req.body;
  //  验证有没有传参
  if (typeof params.userName == "undefined" || params.password == "undefined") {
    res.json({
      code: "0000",
      message: "入参不能为空",
    });
    return;
  }

  //  验证 参数 是否合法
  let userRes = /\w{6,12}$/.test(params.userName);
  let psdRes = /^[A-Z]\w{5,12}$/.test(params.password);
  if (!userRes || !psdRes) {
    res.json({
      code: "0001",
      message: "入参不合法",
    });
    return;
  }

  //  验证是否存在该用户
  let name = `select userName from user where userName=${params.userName};`;
  exec(name)
    .then((data) => {
      if (data.length == 0) {
        res.json({
          code: "2003",
          message: "用户名不存在",
        });
        return;
      }
      //  验证身份
      let word = `select password from user where userName=${params.userName};`;

      exec(word).then((data) => {
        if (data[0].password != params.password) {
          res.json({
            code: "2001",
            message: "用户名或密码不正确"
          });
          return;
        }
        let token = jwt.sign({
            name: params.userName, 
        }, 'my_token', { 
            expiresIn: 1000 * 10 
        })
        res.json({
            code: "2000",
            message: "登录成功",
            token
        });
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/home", (req, res) => {
    res.json({
      code: "2000",
      message: "成功",
    });
});

app.get("/logout", (req, res) => {
  res.json({
    code: "2000",
    message: "成功",
  });
});

