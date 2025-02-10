import { createQueryKeys } from "@lukemorales/query-key-factory";
import { orderApi } from "~/services/order.service";

export const ORDER_KEYS = createQueryKeys("order", {
  customer: (customerId: string) => ({
    queryKey: [customerId],
    queryFn: () => orderApi.getOrders(customerId),
  }),
  detail: (orderId: string) => ({
    queryKey: [orderId],
    queryFn: () => orderApi.getOrder(orderId),
  }),
});
