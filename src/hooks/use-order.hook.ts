import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "~/constants";

export function useCustomerOrders(customerId: string) {
  return useQuery(QUERY_KEYS.order.customer(customerId));
}

export function useOrder(orderId: string) {
  return useQuery(QUERY_KEYS.order.detail(orderId));
}
