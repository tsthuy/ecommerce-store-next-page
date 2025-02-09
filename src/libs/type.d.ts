type CollectionType = {
  _id: string;
  title: string;
  description: string;
  image: string;
  products: ProductType[];
};

type ProductType = {
  _id: string;
  title: string;
  description: string;
  media: [string];
  category: string;
  collections: [string];
  tags: [string];
  price: number;
  cost: number;
  sizes: [string];
  colors: [string];
  createdAt: string;
  updatedAt: string;
};

type UserType = {
  clerkId: string;
  wishlist: [string];
  createdAt: string;
  updatedAt: string;
};

type OrderType = {
  shippingAddress: object;
  _id: string;
  customerClerkId: string;
  products: [OrderItemType];
  shippingRate: string;
  totalAmount: number;
};

type OrderItemType = {
  product: ProductType;
  color: string;
  size: string;
  quantity: number;
  _id: string;
};
