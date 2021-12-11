const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const ObjectId= require('mongodb').ObjectId;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// mongodb setting
const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://Saidul:tnyn9EdEQgj1JqB2@cluster0.npcff.mongodb.net/organicdb?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// data get method
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// mongodb client connected
client.connect((err) => {
  const collection = client.db("organicdb").collection("product");
  // data receive from mongodb to ui
  app.get('/products',(req,res)=>{
    collection.find({})
    .toArray((err,documents)=>{
      res.send(documents);
    })
  })
// data send to mongodb from ui
  app.post("/addProduct", (req, res) => {
    const product = req.body;
    collection.insertOne(product)
    .then(result => {
      console.log("data send");
      res.send("Success");
    });
  });

// data delete
  app.delete("/delete/:id",(req,res)=>{
    console.log(req.params.id);
    collection.deleteOne({_id: ObjectId(req.params.id)})
    .then(result=>{
      console.log(result);
    })
  })

  // data show
  app.get("/product/:id",(req,res)=>{
    collection.find({_id: ObjectId(req.params.id)})
    .toArray((err,documents)=>{
      res.send(documents[0]);
    })
  })
  console.log("Database update");

  // data update

  app.patch('/update/:id',(req,res)=>{
    console.log(req.body.quantity);
    collection.updateOne({_id: ObjectId(req.params.id)},
    {
      $set:{name: req.body.name,price: req.body.price, quantity:req.body.quantity}
    })
    .then(result=>{
      console.log(result);
    })
  })

  
});

app.listen(4200, () => console.log("listening port 4200"));
