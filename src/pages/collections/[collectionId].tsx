import Image from "next/image";
import ProductCard from "~/components/product-card";
import { useCollection } from "~/hooks/use-collections.hook";
import { collectionApi } from "~/services/collection.service";

export async function getStaticProps({
  params,
}: {
  params: { collectionId: string };
}) {
  const collection = await collectionApi.getCollection(params.collectionId);
  return {
    props: {
      collection,
    },

    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const collections = await collectionApi.getCollections();
  const paths = collections.map((collection: CollectionType) => ({
    params: { collectionId: collection._id },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

const CollectionDetails = ({ collection }: { collection: CollectionType }) => {
  const { data: collectionData } = useCollection(collection._id, collection);
  return (
    <div className="flex flex-col px-10 py-5 items-center gap-8">
      <Image
        src={collectionData?.image || ""}
        width={1500}
        height={1000}
        alt="Collection"
        className="w-full h-[400px] object-cover rounded-xl"
      />

      <p className="text-heading3-bold text-grey-2">{collectionData?.title}</p>
      <p className="text-body-normal text-grey-2 text-center max-w-[900px]">
        {collectionData?.description}
      </p>

      <div className="flex flex-wrap justify-center gap-16">
        {collectionData?.products.map((product: ProductType) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CollectionDetails;
