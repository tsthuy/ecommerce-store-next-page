import { UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { CircleUserRound, Menu, Search, ShoppingCart } from "lucide-react";
import { Input } from "./ui/input";
import { useState } from "react";
import { Button } from "./ui/button";
import useCart from "~/hooks/use-cart.hook";

const NavBar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useUser();

  const { cartItems } = useCart();

  const [dropdownMenu, setDropdownMenu] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <div className="sticky top-0 z-10 py-2 px-10 flex gap-2 justify-between items-center bg-white max-sm:px-12">
      {/* logo */}
      <Link href={"/"}>
        <Image src="/logo.png" alt="logo" width={130} height={100} />
      </Link>

      {/* menu items */}
      <div className="flex gap-4 text-base-bold max-lg:hidden">
        <Link
          href="/"
          className={`hover:text-red-1 ${pathname === "/" && "text-red-1"}`}
        >
          Home
        </Link>
        <Link
          href={user ? "/wishlist" : "auth/sign-in"}
          className={`hover:text-red-1 ${
            pathname === "/wishlist" && "text-red-1"
          }`}
        >
          Wishlist
        </Link>
        <Link
          href={user ? "/orders" : "auth/sign-in"}
          className={`hover:text-red-1 ${
            pathname === "/orders" && "text-red-1"
          }`}
        >
          Orders
        </Link>
      </div>

      {/* search */}
      <div className="flex gap-3 px-3 py-1 items-center rounded-lg">
        <Input
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button
          disabled={query === ""}
          onClick={() => router.push(`/search/${query}`)}
        >
          <Search className="cursor-pointer h-4 w-4 hover:text-red-1" />
        </Button>
      </div>

      {/* cart, menu mobile and user info */}
      <div className="relative flex gap-3 items-center">
        <Link
          href="/cart"
          className="flex items-center gap-3 border rounded-lg px-2 py-1 hover:bg-black hover:text-white max-md:hidden"
        >
          <ShoppingCart />
          <p className="text-base-bold">Cart ({cartItems.length})</p>
        </Link>

        <Menu
          className="cursor-pointer lg:hidden"
          onClick={() => setDropdownMenu(!dropdownMenu)}
        />

        {/* mobile */}
        {dropdownMenu && (
          <>
            <div
              onClick={() => setDropdownMenu(false)}
              className="fixed inset-0 bg-black bg-opacity-50 z-20"
            ></div>
            <div
              onClick={() => setDropdownMenu(false)}
              className="absolute top-12 z-30 right-5 flex flex-col gap-4 p-3 rounded-lg border bg-white text-base-bold lg:hidden"
            >
              <Link href="/" className="hover:text-red-1">
                Home
              </Link>
              <Link
                href={user ? "/wishlist" : "auth/sign-in"}
                className="hover:text-red-1"
              >
                Wishlist
              </Link>
              <Link
                href={user ? "/orders" : "auth/sign-in"}
                className="hover:text-red-1"
              >
                Orders
              </Link>
              <Link
                href="/cart"
                className="flex items-center gap-3 border rounded-lg px-2 py-1 hover:bg-black hover:text-white"
              >
                <ShoppingCart />
                <p className="text-base-bold">Cart ({cartItems.length})</p>
              </Link>
            </div>
          </>
        )}

        {/* user info */}
        {user ? (
          <UserButton afterSignOutUrl="/auth/sign-in" />
        ) : (
          <Link href="auth/sign-in">
            <CircleUserRound />
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
