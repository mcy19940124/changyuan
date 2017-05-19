//app/js 搭建服务器并且配置文件信息

var express = require("express");
var todoController = require("./controller/todocontroller.js");

var app = express();

app.set("view engine","ejs");

//配置服务器识别静态文件
app.use(express.static("./public"));

//调用方法
todoController(app);

app.listen("3000");





