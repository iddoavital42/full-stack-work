 const port = 4000;
 const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://iddoavital12:iddo2605@cluster0.3shcnh.mongodb.net/Product', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});


const productSchema = new mongoose.Schema({
 name:String,
 quantity:Number,
});

const Product = mongoose.model("Product", productSchema);

app.get("/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.post("/products", async (req, res) => {
    try {
      const newProduct = new Product(req.body);
      await newProduct.save();
      res.status(201).json(newProduct);
    } catch (err) {
      res.status(500).json({ error: "Server error" });
    }
  });
  

app.delete("/products/:id", async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

app.put("/products/:id", async (req, res) => {
  await Product.findByIdAndUpdate(req.params.id, req.body);
  res.json({ success: true });
});

app.listen(port, (error) => {
    if (!error) {
      console.log("🚀 Server is running on port " + port);
    } else {
      console.log("❌ Error: " + error);
    }
  });
  app.use((req, res) => {
    res.status(404).json({ error: "Not Found" });
  });
  