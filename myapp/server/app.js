const express = require('express');
const router = express.Router();
const app = express();

router.get("/",(req,res)=>{
    console.log('111111111111112')
    let {id}  =req.params;
    console.log('进入接口了',id)

    res.json({
        name:"王宇航",
        id:req.params
    })
})
router.get("/users/:id",(req,res)=>{
    console.log('1111111111111')

    res.json({
        name:"王宇航",
        id:req.query
    })
})
app.use(router)
app.listen(3001,()=>{
    console.log('3001');
})