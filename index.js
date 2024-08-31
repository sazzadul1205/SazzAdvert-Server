const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
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
    const SuccessStoriesCollection = client
      .db("SazzVert")
      .collection("SuccessStories");
    const BrandsCollection = client.db("SazzVert").collection("Brands");
    const TestimonialSlidesCollection = client
      .db("SazzVert")
      .collection("TestimonialSlides");
    const BlogsCollection = client.db("SazzVert").collection("Blogs");

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
    // Update Banners
    app.put("/Banners/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const updatedCategory = req.body;
      const result = await BannersCollection.updateOne(query, {
        $set: updatedCategory,
      });
      res.send(result);
    });

    // Plaques API
    app.get("/Plaques", async (req, res) => {
      const result = await PlaquesCollection.find().toArray();
      res.send(result);
    });
    // Update Plaques
    app.put("/Plaques/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const updatedCategory = req.body;
      const result = await PlaquesCollection.updateOne(query, {
        $set: updatedCategory,
      });
      res.send(result);
    });

    // WhatWeDo API
    app.get("/WhatWeDo", async (req, res) => {
      const result = await WhatWeDoCollection.find().toArray();
      res.send(result);
    });
    // Update WhatWeDo
    app.put("/WhatWeDo/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const updatedCategory = req.body;
      const result = await WhatWeDoCollection.updateOne(query, {
        $set: updatedCategory,
      });
      res.send(result);
    });
    // Post new WhatWeDo
    app.post("/WhatWeDo", async (req, res) => {
      const request = req.body;
      const result = await WhatWeDoCollection.insertOne(request);
      res.send(result);
    });
    // delete WhatWeDo
    app.delete("/WhatWeDo/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await WhatWeDoCollection.deleteOne(query);
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
    // Update TitleDatas
    app.put("/TitleDatas/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const updatedCategory = req.body;
      const result = await TitleDatasCollection.updateOne(query, {
        $set: updatedCategory,
      });
      res.send(result);
    });

    // ProjectAreaComponent API
    app.get("/ProjectAreaComponent", async (req, res) => {
      const result = await ProjectAreaComponentCollection.find().toArray();
      res.send(result);
    });
    // Update ProjectAreaComponent
    app.put("/ProjectAreaComponent/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const updatedCategory = req.body;
      const result = await ProjectAreaComponentCollection.updateOne(query, {
        $set: updatedCategory,
      });
      res.send(result);
    });

    // Capabilities API
    app.get("/Capabilities", async (req, res) => {
      const result = await CapabilitiesCollection.find().toArray();
      res.send(result);
    });
    // Update Capabilities
    app.put("/Capabilities/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const updatedCategory = req.body;
      const result = await CapabilitiesCollection.updateOne(query, {
        $set: updatedCategory,
      });
      res.send(result);
    });
    // Post new Capabilities
    app.post("/Capabilities", async (req, res) => {
      const request = req.body;
      const result = await CapabilitiesCollection.insertOne(request);
      res.send(result);
    });
    // delete Capabilities
    app.delete("/Capabilities/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await CapabilitiesCollection.deleteOne(query);
      res.send(result);
    });

    // OurProcess API
    app.get("/OurProcess", async (req, res) => {
      const result = await OurProcessCollection.find().toArray();
      res.send(result);
    });
    // Update OurProcess
    app.put("/OurProcess/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const updatedCategory = req.body;
      const result = await OurProcessCollection.updateOne(query, {
        $set: updatedCategory,
      });
      res.send(result);
    });
    // Post new OurProcess
    app.post("/OurProcess", async (req, res) => {
      const request = req.body;
      const result = await OurProcessCollection.insertOne(request);
      res.send(result);
    });
    // delete OurProcess
    app.delete("/OurProcess/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await OurProcessCollection.deleteOne(query);
      res.send(result);
    });

    // AwardsComponent API
    app.get("/AwardsComponent", async (req, res) => {
      // Get the `Number` query parameter from the request
      const { Number } = req.query;

      let result;
      if (Number) {
        // If the Number query parameter exists, query AwardsComponent by the Number
        const query = { Number: parseInt(Number) }; // Convert Number to integer
        result = await AwardsComponentCollection.find(query).toArray();
      } else {
        // Otherwise, fetch all AwardsComponent
        result = await AwardsComponentCollection.find().toArray();
      }

      // Send the result as a response
      res.status(200).json(result);
    });
    // Update AwardsComponent
    app.put("/AwardsComponent/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const updatedCategory = req.body;
      const result = await AwardsComponentCollection.updateOne(query, {
        $set: updatedCategory,
      });
      res.send(result);
    });

    // SuccessStories API
    app.get("/SuccessStories", async (req, res) => {
      const result = await SuccessStoriesCollection.find().toArray();
      res.send(result);
    });
    // Update SuccessStories
    app.put("/SuccessStories/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const updatedCategory = req.body;
      const result = await SuccessStoriesCollection.updateOne(query, {
        $set: updatedCategory,
      });
      res.send(result);
    });
    // Post new SuccessStories
    app.post("/SuccessStories", async (req, res) => {
      const request = req.body;
      const result = await SuccessStoriesCollection.insertOne(request);
      res.send(result);
    });
    // delete SuccessStories
    app.delete("/SuccessStories/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await SuccessStoriesCollection.deleteOne(query);
      res.send(result);
    });

    // Brands API
    app.get("/Brands", async (req, res) => {
      const result = await BrandsCollection.find().toArray();
      res.send(result);
    });
    // Update Brands
    app.put("/Brands/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const updatedCategory = req.body;
      const result = await BrandsCollection.updateOne(query, {
        $set: updatedCategory,
      });
      res.send(result);
    });
    // Post new Brands
    app.post("/Brands", async (req, res) => {
      const request = req.body;
      const result = await BrandsCollection.insertOne(request);
      res.send(result);
    });
    // delete Brands
    app.delete("/Brands/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await BrandsCollection.deleteOne(query);
      res.send(result);
    });

    // TestimonialSlides API
    app.get("/TestimonialSlides", async (req, res) => {
      const result = await TestimonialSlidesCollection.find().toArray();
      res.send(result);
    });
    // Update TestimonialSlides
    app.put("/TestimonialSlides/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const updatedCategory = req.body;
      const result = await TestimonialSlidesCollection.updateOne(query, {
        $set: updatedCategory,
      });
      res.send(result);
    });
    // Post new TestimonialSlides
    app.post("/TestimonialSlides", async (req, res) => {
      const request = req.body;
      const result = await TestimonialSlidesCollection.insertOne(request);
      res.send(result);
    });
    // delete TestimonialSlides
    app.delete("/TestimonialSlides/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await TestimonialSlidesCollection.deleteOne(query);
      res.send(result);
    });

    // Blogs API
    app.get("/Blogs", async (req, res) => {
      const result = await BlogsCollection.find().toArray();
      res.send(result);
    });
    // Update Blogs
    app.put("/Blogs/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const updatedCategory = req.body;
      const result = await BlogsCollection.updateOne(query, {
        $set: updatedCategory,
      });
      res.send(result);
    });
    // Post new Blogs
    app.post("/Blogs", async (req, res) => {
      const request = req.body;
      const result = await BlogsCollection.insertOne(request);
      res.send(result);
    });
    // delete Blogs
    app.delete("/Blogs/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await BlogsCollection.deleteOne(query);
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
