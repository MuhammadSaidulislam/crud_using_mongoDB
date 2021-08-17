const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

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
    collection.find({}).limit(4)
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

  console.log("Database update");
});

app.listen(4200, () => console.log("listening port 4200"));
