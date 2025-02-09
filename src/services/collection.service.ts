import { defaultApiClient } from "./custom-axios";

export const collectionApi = {
  getCollections: (): Promise<CollectionType[]> =>
    defaultApiClient.get("collections"),
  getCollection: (collectionId: string): Promise<CollectionType> =>
    defaultApiClient.get(`collections/${collectionId}`),
};
