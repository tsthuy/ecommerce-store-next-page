import { storeApiClient } from "./custom-axios";

export const wishlistApi = {
  getWishlist: (productId: string): Promise<UserType> =>
    storeApiClient.post(`/users/wishlist/${productId}`),
};
