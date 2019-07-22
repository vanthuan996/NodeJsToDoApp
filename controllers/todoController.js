
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
var data = [
    // { item: 'go to school' },
    // { item: 'go to movie' },
    // { item: 'go out' },
]

module.exports = function (app) {

    // show công việc
    app.get('/todo', function (req, res) {
        res.render('todo', { todos: data });
    });
    //nhập công việc
    app.post('/todo',urlencodedParser, function (req, res) {
        data.push((req.body));
        res.json(data);
    });
    //xóa công việc
    app.delete('/todo', function (req, res) {

    });
    //console.log('This is todo controller');
};