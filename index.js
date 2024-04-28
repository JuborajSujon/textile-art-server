const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

// config
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// mongodb
const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@atlascluster.xgsegjb.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const productCollection = client.db("artcraftDB").collection("products");
    const productCategoryCollection = client
      .db("artcraftDB")
      .collection("products categories");
    // get all products categories form the database
    app.get("/categories", async (req, res) => {
      const cursor = productCategoryCollection.find();
      const categories = await cursor.toArray();
      res.send(categories);
    });

    // get all products form the database
    app.get("/products", async (req, res) => {
      const cursor = productCollection.find();
      const products = await cursor.toArray();
      res.send(products);
    });

    // get single product
    app.get("/product/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const product = await productCollection.findOne(query);
      res.send(product);
    });

    // get product data by userEmail
    app.get("/userproducts/:email", async (req, res) => {
      const email = req.params.email;
      const query = { userEmail: email };
      const products = await productCollection.find(query).toArray();
      res.send(products);
    });

    // add art and craft products
    app.post("/addProduct", async (req, res) => {
      const newProduct = req.body;
      const result = await productCollection.insertOne(newProduct);
      res.send(result);
    });

    // update art and craft products
    app.put("/updateProduct/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const updateProduct = req.body;
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          item_name: updateProduct.item_name,
          image: updateProduct.image,
          subcategory_name: updateProduct.subcategory_name,
          short_description: updateProduct.short_description,
          price: updateProduct.price,
          rating: updateProduct.rating,
          processing_time: updateProduct.processing_time,
          customization: updateProduct.customization,
          stockStatus: updateProduct.stockStatus,
          userEmail: updateProduct.userEmail,
          userName: updateProduct.userName,
        },
      };
      const result = await productCollection.updateOne(
        filter,
        updateDoc,
        options
      );
      res.send(result);
    });

    // delete art and craft products
    app.delete("/productdelete/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      console.log(query);
      const result = await productCollection.deleteOne(query);
      res.send(result);
    });

    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.log);

app.get("/", (req, res) => {
  res.send("server is running");
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
