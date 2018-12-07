const express = require('express');
const fetch = require('node-fetch');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/nodetest');

var TopicsSchema = new mongoose.Schema({
  list: Array,
});


// 全部文章
const topicsModel = mongoose.model('Topics', TopicsSchema);


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
  // fetch('https://cnodejs.org/api/v1/topics?mdrender=false&page=50').then(res => res.json())
  // .then(res => (topicsModel({list: res.data}).save(function(error){
  //   if(error) throw (error);
  //   console.log('保存成功');
  // })))

app.get('/', function (req, res) {
  topicsModel.findOne({_id: '5c0a225e9a05b3dea547032e'}, function(err, doc) {
    if (err) {
      console.log('err:', err);
      return;
    }
    res.send(JSON.stringify(doc.list))

  })
})
app.get('/:id', function (req, res) {

  topicsModel.find({_id: '5c0a225e9a05b3dea547032e', "list.id":req.params.id},{"list.$":1}, function(err, doc) {
    if (err) {
      console.log('err:', err);
      return;
    }
    res.send(JSON.stringify(doc[0].list[0]))

  })
})

app.listen(3000);
