import { GetStaticProps, GetStaticPaths } from "next";
import Gallery from "~/components/gallery";
import ProductCard from "~/components/product-card";
import ProductInfo from "~/components/product-info";
import { useProduct, useRelatedProducts } from "~/hooks/use-product.hook";
import { productApi } from "~/services/product.service";

interface ProductDetailsProps {
  productDetails: ProductType;
  relatedProducts: ProductType[];
}

const ProductDetails = ({
  productDetails,
  relatedProducts,
}: ProductDetailsProps) => {
  const { data: product } = useProduct(productDetails._id, productDetails);

  const { data: related } = useRelatedProducts(
    productDetails._id,
    relatedProducts
  );

  return (
    <>
      <div className="flex justify-center items-start gap-16 py-10 px-5 max-md:flex-col max-md:items-center">
        <Gallery productMedia={product?.media || []} />
        <ProductInfo productInfo={product || productDetails} />
      </div>

      <div className="flex flex-col items-center px-10 py-5 max-md:px-3">
        <p className="text-heading3-bold">Related Products</p>
        <div className="flex flex-wrap gap-16 mx-auto mt-8">
          {related?.map((product: ProductType) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductDetails;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const productId = params?.productId as string;

  const productDetails = await productApi.getProduct(productId);
  const relatedProducts = await productApi.getProducts();

  return {
    props: {
      productDetails,
      relatedProducts,
    },
    revalidate: 60,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await productApi.getProducts();

  const paths = products.map((product: ProductType) => ({
    params: { productId: product._id },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};
