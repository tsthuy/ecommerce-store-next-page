import { useUser } from "@clerk/nextjs";
import { Heart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useUserQuery } from "~/hooks/use-user.hook";
import { useToggleProductWishlist } from "~/hooks/use-product.hook";

interface HeartFavoriteProps {
  product: ProductType;
  updateSignedInUser?: (updatedUser: UserType) => void;
}

const HeartFavorite = ({ product, updateSignedInUser }: HeartFavoriteProps) => {
  const router = useRouter();

  const { user } = useUser();

  const [isLiked, setIsLiked] = useState(false);

  const { data: userData } = useUserQuery(user?.id || "");
  const mutation = useToggleProductWishlist(product._id);

  useEffect(() => {
    if (userData) {
      setIsLiked(userData.wishlist.includes(product._id));
    }
  }, [userData, product._id]);

  const handleLike = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    try {
      if (!user) {
        router.push("/sign-in");
        return;
      } else {
        const updatedUser = await mutation.mutateAsync();
        setIsLiked(updatedUser.wishlist.includes(product._id));
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        updateSignedInUser && updateSignedInUser(updatedUser);
      }
    } catch (err) {
      console.log("[wishlist_POST]", err);
    }
  };

  return (
    <button onClick={handleLike}>
      <Heart fill={`${isLiked ? "red" : "white"}`} />
    </button>
  );
};

export default HeartFavorite;
