import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv'
dotenv.config()
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";

const app = express();

app.use(cors());

app.use("/posts", postRoutes);
app.use("/user",userRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
// app.use(cors());

const CONNECTION_URL =
  "mongodb+srv://kaushalMore:Kunal594@cluster0.juxcepe.mongodb.net/?retryWrites=true&w=majority";
const PORT = 1000;

mongoose.set("strictQuery", false);

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

// mongoose.set('useFindAndModify', false);
