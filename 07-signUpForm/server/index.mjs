// server/index.js
import express from 'express';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000; // Asegúrate de tener un valor por defecto para el puerto
const uri = process.env.MONGODB_URI;

app.use(cors({
  origin: 'http://localhost:5173' // Asegúrate de ajustar esto según sea necesario
}));
app.use(express.json());

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  }
}

app.post('/submit-form', async (req, res) => {
  try {
    const collection = client.db('myDatabase').collection('myCollection');
    await collection.insertOne(req.body);
    res.status(200).send('Form data saved successfully');
  } catch (error) {
    console.error("Error saving form data", error);
    res.status(500).send('Error saving form data');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  connectToMongoDB().catch(console.error);
});
