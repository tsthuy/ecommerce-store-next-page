import { defaultApiClient } from "./custom-axios";

export const orderApi = {
  getOrders: (customerId: string): Promise<OrderType[]> =>
    defaultApiClient.get(`/orders/customers/${customerId}`),

  getOrder: (orderId: string): Promise<OrderType> =>
    defaultApiClient.get(`/orders/${orderId}`),
};
