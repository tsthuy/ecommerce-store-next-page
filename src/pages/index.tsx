import Image from "next/image";
import Collections from "~/components/collections";
import ProductList from "~/components/product-list";

export default function Home() {
  return (
    <>
      <Image
        src="/banner.png"
        alt="banner"
        width={2000}
        height={1000}
        className="w-screen"
      />
      <Collections />
      <ProductList />
    </>
  );
}
