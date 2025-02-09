import { getAuth } from "@clerk/nextjs/server";
import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "~/libs/connectDB";
import User from "~/modals/user";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { userId } = getAuth(req);

      if (!userId) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      await connectDB();

      const user = await User.findOne({ clerkId: userId });

      if (!user) {
        return res.status(400).json({ message: "Product Id required" });
      }

      const { productId } = req.query;

      if (!productId) {
        return res.status(400).json({ message: "Product Id required" });
      }

      const isLiked = user.wishlist.includes(productId);

      if (isLiked) {
        // Dislike
        user.wishlist = user.wishlist.filter((id: string) => id !== productId);
      } else {
        // Like
        user.wishlist.push(productId);
      }

      await user.save();

      return res.status(200).json(user);
    } catch (err) {
      console.log("[wishlist_POST]", err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}
