var mongoose = require('mongoose');

var TopicsSchema = new mongoose.Schema({
    list: Array,
});

mongoose.model('Topics', TopicsSchema);
