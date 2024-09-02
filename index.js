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
    const GetInTouchCollection = client.db("SazzVert").collection("GetInTouch");
    const FAQCollection = client.db("SazzVert").collection("FAQ");
    const MarketChaptersCollection = client
      .db("SazzVert")
      .collection("MarketChapters");
    const MarketSidebarCollection = client
      .db("SazzVert")
      .collection("MarketSidebar");
    const BigTestimonialsCollection = client
      .db("SazzVert")
      .collection("BigTestimonials");
    const GetInTouchContactCollection = client
      .db("SazzVert")
      .collection("GetInTouchContact");
    const OurTeamCollection = client.db("SazzVert").collection("OurTeam");
    const JobDetailsCollection = client.db("SazzVert").collection("JobDetails");

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
      try {
        const { page, size } = req.query;

        const filter = {};

        const skip = page
          ? (parseInt(page) - 1) * (size ? parseInt(size) : 10)
          : 0;
        const limit = size ? parseInt(size) : 10;

        const result = await BlogsCollection.find(filter)
          .skip(skip)
          .limit(limit)
          .toArray();

        res.send(result);
      } catch (error) {
        res
          .status(500)
          .send({ error: "An error occurred while fetching blogs." });
      }
    });
    // count of all Blogs
    app.get("/BlogsCount", async (req, res) => {
      const count = await BlogsCollection.countDocuments();
      res.json({ count });
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

    // GetInTouch API
    app.get("/GetInTouch", async (req, res) => {
      const result = await GetInTouchCollection.find().toArray();
      res.send(result);
    });
    // Update GetInTouch
    app.put("/GetInTouch/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const updatedCategory = req.body;
      const result = await GetInTouchCollection.updateOne(query, {
        $set: updatedCategory,
      });
      res.send(result);
    });
    // Post new GetInTouch
    app.post("/GetInTouch", async (req, res) => {
      const request = req.body;
      const result = await GetInTouchCollection.insertOne(request);
      res.send(result);
    });
    // delete GetInTouch
    app.delete("/GetInTouch/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await GetInTouchCollection.deleteOne(query);
      res.send(result);
    });

    // FAQ API
    app.get("/FAQ", async (req, res) => {
      const result = await FAQCollection.find().toArray();
      res.send(result);
    });
    // Update FAQ
    app.put("/FAQ/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const updatedCategory = req.body;
      const result = await FAQCollection.updateOne(query, {
        $set: updatedCategory,
      });
      res.send(result);
    });
    // Post new FAQ
    app.post("/FAQ", async (req, res) => {
      const request = req.body;
      const result = await FAQCollection.insertOne(request);
      res.send(result);
    });
    // delete FAQ
    app.delete("/FAQ/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await FAQCollection.deleteOne(query);
      res.send(result);
    });

    // MarketChapters API
    app.get("/MarketChapters", async (req, res) => {
      const result = await MarketChaptersCollection.find().toArray();
      res.send(result);
    });
    // Update MarketChapters
    app.put("/MarketChapters/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const updatedCategory = req.body;
      const result = await MarketChaptersCollection.updateOne(query, {
        $set: updatedCategory,
      });
      res.send(result);
    });
    // Post new MarketChapters
    app.post("/MarketChapters", async (req, res) => {
      const request = req.body;
      const result = await MarketChaptersCollection.insertOne(request);
      res.send(result);
    });
    // delete MarketChapters
    app.delete("/MarketChapters/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await MarketChaptersCollection.deleteOne(query);
      res.send(result);
    });

    // MarketSidebar API
    app.get("/MarketSidebar", async (req, res) => {
      const result = await MarketSidebarCollection.find().toArray();
      res.send(result);
    });
    // Update MarketSidebar
    app.put("/MarketSidebar/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const updatedCategory = req.body;
      const result = await MarketSidebarCollection.updateOne(query, {
        $set: updatedCategory,
      });
      res.send(result);
    });
    // Post new MarketSidebar
    app.post("/MarketSidebar", async (req, res) => {
      const request = req.body;
      const result = await MarketSidebarCollection.insertOne(request);
      res.send(result);
    });
    // delete MarketSidebar
    app.delete("/MarketSidebar/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await MarketSidebarCollection.deleteOne(query);
      res.send(result);
    });

    // BigTestimonials API
    app.get("/BigTestimonials", async (req, res) => {
      const result = await BigTestimonialsCollection.find().toArray();
      res.send(result);
    });
    // Update BigTestimonials
    app.put("/BigTestimonials/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const updatedCategory = req.body;
      const result = await BigTestimonialsCollection.updateOne(query, {
        $set: updatedCategory,
      });
      res.send(result);
    });
    // Post new BigTestimonials
    app.post("/BigTestimonials", async (req, res) => {
      const request = req.body;
      const result = await BigTestimonialsCollection.insertOne(request);
      res.send(result);
    });
    // delete BigTestimonials
    app.delete("/BigTestimonials/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await BigTestimonialsCollection.deleteOne(query);
      res.send(result);
    });

    // GetInTouchContact API
    app.get("/GetInTouchContact", async (req, res) => {
      const result = await GetInTouchContactCollection.find().toArray();
      res.send(result);
    });
    // Update GetInTouchContact
    app.put("/GetInTouchContact/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const updatedCategory = req.body;
      const result = await GetInTouchContactCollection.updateOne(query, {
        $set: updatedCategory,
      });
      res.send(result);
    });

    // BigTestimonials API
    app.get("/OurTeam", async (req, res) => {
      const result = await OurTeamCollection.find().toArray();
      res.send(result);
    });
    // Update OurTeam
    app.put("/OurTeam/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const updatedCategory = req.body;
      const result = await OurTeamCollection.updateOne(query, {
        $set: updatedCategory,
      });
      res.send(result);
    });
    // Post new OurTeam
    app.post("/OurTeam", async (req, res) => {
      const request = req.body;
      const result = await OurTeamCollection.insertOne(request);
      res.send(result);
    });
    // delete OurTeam
    app.delete("/OurTeam/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await OurTeamCollection.deleteOne(query);
      res.send(result);
    });

    // JobDetails API
    app.get("/JobDetails", async (req, res) => {
      const result = await JobDetailsCollection.find().toArray();
      res.send(result);
    });
    // Update JobDetails
    app.put("/JobDetails/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const updatedCategory = req.body;
      const result = await JobDetailsCollection.updateOne(query, {
        $set: updatedCategory,
      });
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
