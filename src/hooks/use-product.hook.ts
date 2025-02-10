import {
  useMutation,
  useQueries,
  useQuery,
  useSuspenseQuery,
} from "@tanstack/react-query";
import { QUERY_KEYS } from "~/constants";
import queryClient from "~/libs/query-client";
import { productApi } from "~/services/product.service";
import { wishlistApi } from "~/services/wishlist.service";

export function useProducts() {
  return useQuery({
    ...QUERY_KEYS.product.all,
    queryFn: () => productApi.getProducts(),
  });
}

export function useRelatedProducts(
  productId: string,
  initialData?: ProductType[]
) {
  return useQuery({
    queryKey: QUERY_KEYS.product.related(productId).queryKey,
    queryFn: QUERY_KEYS.product.related(productId).queryFn,
    initialData,
  });
}

export function useProduct(productId: string, initialData?: ProductType) {
  return useSuspenseQuery({
    queryKey: QUERY_KEYS.product.detail(productId).queryKey,
    queryFn: QUERY_KEYS.product.detail(productId).queryFn,
    initialData,
  });
}

export function useProductsWishlist(wishlist: string[]) {
  return useQueries({
    queries: wishlist.map((productId: string) => ({
      queryKey: QUERY_KEYS.product.detail(productId).queryKey,
      queryFn: QUERY_KEYS.product.detail(productId).queryFn,
    })),
  });
}

export function useToggleProductWishlist(productId: string) {
  return useMutation({
    mutationFn: () => wishlistApi.getWishlist(productId),
    onSuccess: (updatedUser) => {
      queryClient.invalidateQueries(
        QUERY_KEYS.user.detail(updatedUser.clerkId)
      );
    },
    onSettled: () => {},
  });
}
