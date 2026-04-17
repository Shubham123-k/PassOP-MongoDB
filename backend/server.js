const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const client = new MongoClient(process.env.MONGO_URI);

let db;

async function connectDB() {
  try {
    await client.connect();
    db = client.db(process.env.DB_NAME);
    console.log("MongoDB Connected");
  } catch (err) {
    console.error(err);
  }
}

connectDB();

app.get("/passwords", async (req, res) => {
  const data = await db.collection("passwords").find().toArray();
  res.json(data);
});

app.post("/passwords", async (req, res) => {
  const result = await db.collection("passwords").insertOne(req.body);
  res.json(result);
});

app.delete("/passwords/:id", async (req, res) => {
  await db.collection("passwords").deleteOne({
    _id: new ObjectId(req.params.id),
  });
  res.json({ message: "Deleted" });
});

app.listen(process.env.PORT, () => {
  console.log("Server running on port", process.env.PORT);
});