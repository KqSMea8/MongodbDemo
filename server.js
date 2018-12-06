const express = require('express');
const fetch = require('node-fetch');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/nodetest');

var TopicsSchema = new mongoose.Schema({
  list: Array,
});

const topicsModel = mongoose.model('Topics', TopicsSchema);

// const Topics = mongoose.model('Topics');

const app = express();
// 解决node跨域问题
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
  fetch('https://cnodejs.org/api/v1/topics').then(res => res.json())
  .then(res => (topicsModel({list: res.data}).save(function(error){
    if(error) throw (error);
    console.log('保存成功');
  })))


const data = {
  "newData": [
    {
      "name": "haha",
      "age": 3,
      "id": 1
    },
    {
      "name": "weiwei",
      "age": 3,
      "id": 2
    },
  ]
}
app.get('/', function (req, res) {
  res.send(JSON.stringify(data))
})

app.listen(3000);
