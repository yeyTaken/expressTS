import "dotenv/config";
import mongoose from "mongoose";
import chalk from 'chalk';

import { globals } from "@/index";

if (!process.env.MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined. Check your .env file.");
}

mongoose
  .connect(process.env.MONGODB_URI, {
    dbName: process.env.MONGODB_NAME,
  })
  .then(() =>
    globals.log.success(chalk.hex('#40ca34')(`Connected with: ${chalk.hex('#206ba8').underline('MongoDB')}`))
  )
  .catch((err: any) =>
    globals.log.error(new Error(`An error occurred while connecting to the database:\n${err.message}`))
  );

const db = mongoose.connection.db;
export default db;
