import "dotenv/config";
import mongoose from "mongoose";
import { globals } from "@/index";

if (!process.env.MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined. Check your .env file.");
}

mongoose
  .connect(process.env.MONGODB_URI, {
    dbName: process.env.MONGODB_NAME || 'my-website',
  })
  .then(() =>
    globals.functions.log(
      "MongoDB database successfully connected!",
      'api'
    )
  )
  .catch((err: any) =>
    globals.functions.log(`An error occurred while connecting to the database: ${err.message}`)
  );

const db = mongoose.connection.db;
export default db;
