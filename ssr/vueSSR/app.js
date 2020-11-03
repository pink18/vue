const express = require('express');
const router = express.Router();
const app = express();
const Vue = require('vue');
const renderer = require('vue-server-renderer').createRenderer();

router.get('/',(req,res)=>{
    const vm = new Vue({
        data:{
            url:req.url
        },
        template:`<div>访问的URL是 {{ url }}</div>`
    })
    // console.log(vm);
    renderer.renderToString(vm, (err, html) => {
        if (err) {
          res.status(500).end('Internal Server Error')
          return
        }
        res.end(`
          <!DOCTYPE html>
          <html lang="en">
            <head><meta charset="UTF-8"><title>Hello</title></head>
            <body>${html}</body>
          </html>
        `)
      })
})

app.use(router);
app.listen(3000,()=>{
    console.log(3000);
})