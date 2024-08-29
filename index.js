const { MongoClient, ServerApiVersion } = require("mongodb");
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@sazzvert.8tzlu.mongodb.net/?retryWrites=true&w=majority&appName=SazzVert`;

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
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // Collections
    const BannersCollection = client.db("SazzVert").collection("Banners");
    const PlaquesCollection = client.db("SazzVert").collection("Plaques");
    const WhatWeDoCollection = client.db("SazzVert").collection("WhatWeDo");
    const TitleDatasCollection = client.db("SazzVert").collection("TitleDatas");
    const ProjectAreaComponentCollection = client
      .db("SazzVert")
      .collection("ProjectAreaComponent");
    const CapabilitiesCollection = client
      .db("SazzVert")
      .collection("Capabilities");
    const OurProcessCollection = client.db("SazzVert").collection("OurProcess");
    const AwardsComponentCollection = client
      .db("SazzVert")
      .collection("AwardsComponent");

    // APIs
    // Banner API
    app.get("/Banners", async (req, res) => {
      // Get the `page` query parameter from the request
      const { page } = req.query;

      let result;
      if (page) {
        // If the page query parameter exists, query banners by the page
        const query = { page };
        result = await BannersCollection.find(query).toArray();
      } else {
        // Otherwise, fetch all banners
        result = await BannersCollection.find().toArray();
      }

      // Send the result as the response
      res.send(result);
    });

    // Plaques API
    app.get("/Plaques", async (req, res) => {
      const result = await PlaquesCollection.find().toArray();
      res.send(result);
    });

    // WhatWeDo API
    app.get("/WhatWeDo", async (req, res) => {
      const result = await WhatWeDoCollection.find().toArray();
      res.send(result);
    });

    // TitleDatas API
    app.get("/TitleDatas", async (req, res) => {
      // Get the `page` query parameter from the request
      const { page } = req.query;

      let result;
      if (page) {
        // If the page query parameter exists, query TitleDatas by the page
        const query = { page };
        result = await TitleDatasCollection.find(query).toArray();
      } else {
        // Otherwise, fetch all TitleDatas
        result = await TitleDatasCollection.find().toArray();
      }

      // Send the result as the response
      res.send(result);
    });

    // ProjectAreaComponent API
    app.get("/ProjectAreaComponent", async (req, res) => {
      const result = await ProjectAreaComponentCollection.find().toArray();
      res.send(result);
    });

    // Capabilities API
    app.get("/Capabilities", async (req, res) => {
      const result = await CapabilitiesCollection.find().toArray();
      res.send(result);
    });

    // OurProcess API
    app.get("/OurProcess", async (req, res) => {
      const result = await OurProcessCollection.find().toArray();
      res.send(result);
    });

    // AwardsComponent API
    app.get("/AwardsComponent", async (req, res) => {
      const result = await AwardsComponentCollection.find().toArray();
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("SazzAdvert is Running");
});
app.listen(port, () => {
  console.log(`SazzAdvert Server is Running On Port ${port}`);
});
