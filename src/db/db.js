import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectingToDb = async () => {
  try {
    const Db_connection = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_NAME}`
    );
    console.log(
      `/n MongoDB connected !! DB:HOST : ${Db_connection.connection.host}`
    );
    
  } catch (error) {
    console.log("MONGODB connection error ", error.message);
    process.exit(1);
  }
};

export default connectingToDb;
