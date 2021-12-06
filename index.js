var express = require('express')
var app = express()
const password="Saidul";
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://Saidul:Saidul@cluster0.95kc4.mongodb.net/organicdb?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

const user = ['one', 'userOne','userTwo','userthree','userFour']
app.get('/user/:id', (req,res)=>{
    const id = req.params.id;
    const name = user[id];
    res.send({name,id});
});

app.listen(4200, () => console.log('listening port 4200'));
