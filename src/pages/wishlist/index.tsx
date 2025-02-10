import { useUser } from "@clerk/nextjs";
import ProductCard from "~/components/product-card";
// import { useEffect, useState } from "react";
import { useProductsWishlist } from "~/hooks/use-product.hook";
import { useUserQuery } from "~/hooks/use-user.hook";

const Wishlist = () => {
  const { user } = useUser();

  const { data: signedInUser } = useUserQuery(user?.id || "");
  const wishlistQueries = useProductsWishlist(signedInUser?.wishlist || []);

  const wishlistProducts = wishlistQueries
    .map((query) => query.data)
    .filter((product): product is ProductType => !!product);

  if (wishlistQueries.some((query) => query.isLoading)) {
    return <p>Loading wishlist...</p>;
  }

  const updateSignedInUser = (updatedUser: UserType) => {
    console.log("Updated user:", updatedUser);
  };

  return (
    <div className="px-10 py-5">
      <p className="text-heading3-bold my-10">Your Wishlist</p>
      {wishlistProducts.length === 0 && <p>No items in your wishlist</p>}

      <div className="flex flex-wrap justify-center gap-16">
        {wishlistProducts.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            updateSignedInUser={updateSignedInUser}
          />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
