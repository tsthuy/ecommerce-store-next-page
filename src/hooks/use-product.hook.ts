import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "~/constants";
import { productApi } from "~/services/product.service";

export function useProducts() {
  return useQuery({
    ...QUERY_KEYS.product.all,
    queryFn: () => productApi.getProducts(),
  });
}

export function useProduct(productId: string, initialData?: ProductType) {
  return useQuery({
    queryKey: QUERY_KEYS.product.detail(productId).queryKey,
    queryFn: QUERY_KEYS.product.detail(productId).queryFn,
    initialData,
  });
}
