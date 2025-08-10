import express, { Request, Response } from "express";
import mongoose from "mongoose";
import router from "./routes/imdbRoutes";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config(); // Load environment variables from .env file

const MONGO_URI = process.env.MONGO_URI; // Retrieve the environment variable
const app = express();
app.use(cors());
app.use(express.json());
app.options("*", cors());

const PORT = process.env.PORT || 3000;
mongoose.set("strictQuery", false);

mongoose
  .connect(MONGO_URI, {
    dbName: "node-typescript-app",
  })
  .then((r: any) => {
    console.log(`database connected: ${r.connections[0].host}`);
  })
  .catch((error: any) => {
    console.log(error);
    process.exit(1);
  });

app.get("/", (req: Request, res: Response) => {
  try {
    res.json({
      msg: "It's working!",
    });
  } catch (x) {
    console.error(x);
    res.json({ error: x });
  }
});

app.use("/", router);

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
