**Report on Express.js and MongoDB Implementation**

**1. Introduction** :
today i got to learn the implementation of an Express.js server integrated with MongoDB using Mongoose. \
The project includes CRUD (Create, Read, Update, Delete) operations for a product model, enabling interaction with a MongoDB database.

**2. Project Setup**
The project is set up using Node.js with the following dependencies:

- Express.js for handling HTTP requests.
- Mongoose for connecting and interacting with MongoDB.
- A MongoDB database hosted on MongoDB Atlas.

**3. Code Overview**

### 3.1 Server Initialization

```javascript
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
app.use(express.json()); // Middleware for parsing JSON

mongoose
  .connect("mongodb+srv://marky116:oneone116@my-first-db.j942awn.mongodb.net/?retryWrites=true&w=majority&appName=my-first-db")
  .then(() => console.log("Connected to DB"))
  .catch(() => console.log("Failed to connect to DB"));

app.listen(3000, () => console.log("Server running on port 3000"));
```

### 3.2 Basic API Endpoint

```javascript
app.get("/", (req, res) => {
  res.send("<h1 style='color:mediumpurple'>Hello from API on server</h1>");
});
```

**4. CRUD Operations**

### 4.1 Create Operation

```javascript
app.post("/api/product", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    console.log(product);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
```

**Issue:** There is a typo in `res.status(200).json(product);`, as the variable `products` is declared but `product` is used in the response.

### 4.2 Read Operations

#### Fetch all products

```javascript
app.get("/api/product", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
```
find({})-gives you all the products in the json.
_find() method returns all occurrences in the selection._
#### Fetch product by ID

```javascript
app.get("/api/product/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
```

### 4.3 Update Operation

```javascript
app.put("/api/productu/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
```

\
\
Next is deletion. the last in CRUD.



---



