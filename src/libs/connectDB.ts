import mongoose from "mongoose";

let isConnect: boolean = false;
export const connectDB = async () => {
  if (isConnect) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URL || "", {
      dbName: "ecommerce-store",
    });

    isConnect = true;
    console.log("MongoDB connected");
  } catch (err) {
    console.log("[MongoDB]", err);
  }
};
