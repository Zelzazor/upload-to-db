const express = require('express');
const app = express();
const data = require('./loadData');


app.use(express.static('public'));

app.set('view engine', 'pug');


app.get('/search', (req, res) => {
    let query = req.query.q;
    let result = data.filter(item => item.title.toLowerCase().includes(query.toLowerCase()) || item.description.toLowerCase().includes(query.toLowerCase()));
    res.render('search', {data: result});
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
