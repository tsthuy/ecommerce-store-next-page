import { useRouter } from "next/router";
import ProductCard from "~/components/product-card";
import { useSearch } from "~/hooks/use-search.hook";

const SearchPage = () => {
  const router = useRouter();
  const { query } = router.query;

  const { data: searchedProducts } = useSearch(query as string);

  const decodedQuery = decodeURIComponent(query as string);

  return (
    <div className="px-10 py-5">
      <p className="text-heading3-bold my-10">
        Search results for {decodedQuery}
      </p>
      {!searchedProducts ||
        (searchedProducts.length === 0 && (
          <p className="text-body-bold my-5">No result found</p>
        ))}
      <div className="flex flex-wrap justify-between gap-16">
        {searchedProducts?.map((product: ProductType) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
