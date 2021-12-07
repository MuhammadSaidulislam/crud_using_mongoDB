var express = require("express");
var app = express();
const password = "tnyn9EdEQgj1JqB2";

const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://Saidul:tnyn9EdEQgj1JqB2@cluster0.npcff.mongodb.net/organicdb?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect((err) => {
  const collection = client.db("organicdb").collection("product");
  // perform actions on the collection object
  const products = { name: "water",price:15,quantity:50 };
  collection.insertOne(products).then((res) => {
    console.log("product add");
  });
  console.log("Database update");
  
});

const user = ["one", "userOne", "userTwo", "userthree", "userFour"];
app.get("/user/:id", (req, res) => {
  const id = req.params.id;
  const name = user[id];
  res.send({ name, id });
});

app.listen(4200, () => console.log("listening port 4200"));
