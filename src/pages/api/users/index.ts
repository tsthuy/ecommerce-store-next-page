import { getAuth } from "@clerk/nextjs/server";
import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "~/libs/connectDB";
import User from "~/modals/user";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const { userId } = getAuth(req);

      if (!userId) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      await connectDB();

      let user = await User.findOne({ clerkId: userId });

      if (!user) {
        user = await User.create({ clerkId: userId });
        await user.save();
      }

      return res.status(200).json(user);
    } catch (err) {
      console.log("[users_GET]", err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
