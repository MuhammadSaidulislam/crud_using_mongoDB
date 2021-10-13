var express = require('express')
var app = express()

// app.get('/', function (req, res) {
//     const array={
//         product: 'saidul',
//         price: '10'
//     }
//     res.send(array)
// });

const user = ['', 'userOne','userTwo','userthree','userFour']
app.get('/user/:id', (req,res)=>{
    const id = req.params.id;
    const name = user[id];
    res.send({name,id});
});
const user = ['', 'userOne','userTwo','userthree','userFour']
app.get('/user/:id', (req,res)=>{
    const id = req.params.id;
    const name = user[id];
    res.send({name,id});
});

const user = ['', 'userOne','userTwo','userthree','userFour']
app.get('/user/:id', (req,res)=>{
    const id = req.params.id;
    const name = user[id];
    res.send({name,id});
});
const user = ['', 'userOne','userTwo','userthree','userFour']
app.get('/user/:id', (req,res)=>{
    const id = req.params.id;
    const name = user[id];
    res.send({name,id});
});

app.listen(3000, () => console.log('listening port 3000'));
