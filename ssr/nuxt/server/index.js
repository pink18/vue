const app = require("express")();
const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  port: 3306,
  database: "shopapp"
});

const exec = sql => {
  const promise = new Promise((resolve, reject) => {
    con.query(sql, (err, result) => {
      resolve(result);
    });
  });
  return promise;
};

con.connect();

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

app.get("/id", (req, res) => {
  //   res.send('Hello World!')
  const query = req.query;
  res.json({
    code: "3000",
    message: "获取成功",
    id: query.age
  });
});

module.exports = {
  // path: 'api',
  handler: app
};
