const express = require("express");
const app = express();
const Product = require("./models/product.model.js");

app.use(express.json()); //middleware


app.use("/api/product", productRouter);

const mongoose = require("mongoose");



mongoose
  .connect("mongodb+srv://marky116:oneone116@my-first-db.j942awn.mongodb.net/?retryWrites=true&w=majority&appName=my-first-db")
  
  
  .then(() => {
    console.log("connected to db");
  })
  .catch(() => {
    console.log("failed to connect to db");
  });






app.listen(3000, () => {
  console.log("hello world , at port :'3000' !");
});


app.get("/", (req, res) => {
  res.send(" <h1 style='color:mediumpurple'> Hello from api from server. <h1/>");
});






app.post("/logingh", async (req, res) => {
  
})












//create - post

app.post("/api/product", async (req, res) => {
  try {
    const products = await Product.create(req.body);
    console.log(products);
    res.status(200).json(products);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});




//read - get

app.get("/api/product", async (req, res) => {
    try {
      const products = await Product.find({});
      res.status(200).json(products);
  
  
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  //read by id - get, by id
  
  app.get("/api/product/:id", async (req, res) => {
    // try {
    //   const product = await Product.findById(req.params.id);
    //   res.status(200).json(product);
    // } catch (error) {
    //   res.status(500).json({ message: error.message });
    // }
  });
  


  //update - put

  app.put("/api/product/:id", async (req, res) => {
    try {
      const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true,});
      res.status(200).json(product);

      if(!product){
        return res.status(404).json({message: "product not found"});
      }

      const updatedProduct =  await Product.findById(id);
      res.status(200).json(updatedProduct);

    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });


  //delete - delete

  app.delete("/api/product/:id", async (req, res) => {
    try {
      const product = await Product.findByIdAndDelete(req.params.id);
      res.status(200).json(product);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  });



