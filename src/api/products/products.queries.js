import { useQuery, useQueryClient } from "@tanstack/react-query";
import productsApi from "./products.api";

export const productsKeys = {
  all: ["products"],
  lists: () => [...productsKeys.all, "list"],
  list: (filters) => [...productsKeys.lists(), { filters }],
  details: () => [...productsKeys.all, "detail"],
  detail: (id) => [...productsKeys.details(), id],
  byStore: (storeId) => [...productsKeys.all, "store", storeId],
  search: (query) => [...productsKeys.all, "search", query],
};

export const useProductsByStore = (storeId, options = {}) => {
  return useQuery({
    queryKey: productsKeys.byStore(storeId),
    queryFn: () => productsApi.getProductsByStore(storeId),
    enabled: !!storeId,
    staleTime: 5 * 60 * 1000,
    select: (data) => data?.products || [],
    ...options,
  });
};

export const useProduct = (productId, options = {}) => {
  return useQuery({
    queryKey: productsKeys.detail(productId),
    queryFn: () => productsApi.getProductById(productId),
    enabled: !!productId,
    staleTime: 5 * 60 * 1000,
    retry: 1,
    ...options,
  });
};

export const useProducts = (filters = {}, options = {}) => {
  return useQuery({
    queryKey: productsKeys.list(filters),
    queryFn: () => productsApi.getAllProducts(filters),
    staleTime: 5 * 60 * 1000,
    ...options,
  });
};

export const useSearchProducts = (query, filters = {}, options = {}) => {
  return useQuery({
    queryKey: productsKeys.search(query),
    queryFn: () => productsApi.searchProducts(query, filters),
    enabled: !!query && query.length > 2,
    staleTime: 3 * 60 * 1000,
    ...options,
  });
};

export const usePrefetchProduct = () => {
  const queryClient = useQueryClient();

  return (productId) => {
    queryClient.prefetchQuery({
      queryKey: productsKeys.detail(productId),
      queryFn: () => productsApi.getProductById(productId),
    });
  };
};

export const useInvalidateProducts = () => {
  const queryClient = useQueryClient();

  return {
    invalidateAll: () =>
      queryClient.invalidateQueries({ queryKey: productsKeys.all }),
    invalidateByStore: (storeId) =>
      queryClient.invalidateQueries({
        queryKey: productsKeys.byStore(storeId),
      }),
    invalidateProduct: (productId) =>
      queryClient.invalidateQueries({
        queryKey: productsKeys.detail(productId),
      }),
  };
};

export default {
  useProductsByStore,
  useProduct,
  useProducts,
  useSearchProducts,
  usePrefetchProduct,
  useInvalidateProducts,
};
