var express = require('express')
var app = express()
const password="Saidul";

const user = ['one', 'userOne','userTwo','userthree','userFour']
app.get('/user/:id', (req,res)=>{
    const id = req.params.id;
    const name = user[id];
    res.send({name,id});
});

app.listen(4200, () => console.log('listening port 4200'));
