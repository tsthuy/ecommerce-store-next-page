import Image from "next/image";
import Link from "next/link";
import HeartFavorite from "./heart-favorite";

interface ProductCardProps {
  product: ProductType;
  updateSignedInUser?: (updatedUser: UserType) => void;
}

const ProductCard = ({ product, updateSignedInUser }: ProductCardProps) => {
  return (
    <Link
      className="w-[220px] flex flex-col gap-2"
      href={`/products/${product._id}`}
    >
      <Image
        src={product.media[0]}
        alt={product.title}
        width={250}
        height={300}
        className="h-[250px] object-cover cursor-pointer rounded-lg"
      />

      <div className="">
        <p className="text-base-bold">{product.title}</p>
        <p className="text-small-medium text-grey-2">{product.category}</p>
      </div>

      <div className="flex justify-between items-center">
        <p className="text-body-bold">{product.price}</p>
        <HeartFavorite
          product={product}
          updateSignedInUser={updateSignedInUser}
        ></HeartFavorite>
      </div>
    </Link>
  );
};

export default ProductCard;
