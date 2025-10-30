import { useQuery, useQueryClient } from '@tanstack/react-query';
import storesApi from './stores.api';

// Query keys for stores
export const storesKeys = {
  all: ['stores'],
  lists: () => [...storesKeys.all, 'list'],
  list: (filters) => [...storesKeys.lists(), { filters }],
  details: () => [...storesKeys.all, 'detail'],
  detail: (id) => [...storesKeys.details(), id],
  byCategory: (category) => [...storesKeys.all, 'category', category],
  featured: () => [...storesKeys.all, 'featured'],
  search: (query) => [...storesKeys.all, 'search', query],
};

// Get all stores with optional category filter
export const useStores = (category = null, options = {}) => {
  return useQuery({
    queryKey: category ? storesKeys.byCategory(category) : storesKeys.lists(),
    queryFn: () => storesApi.getAllStores(category),
    staleTime: 5 * 60 * 1000, // 5 minutes
    ...options,
  });
};

// Get stores by dietary category
export const useStoresByCategory = (category, options = {}) => {
  return useQuery({
    queryKey: storesKeys.byCategory(category),
    queryFn: () => storesApi.getStoresByDietaryCategory(category),
    enabled: !!category,
    staleTime: 5 * 60 * 1000,
    ...options,
  });
};

// Get single store by ID
export const useStore = (storeId, options = {}) => {
  return useQuery({
    queryKey: storesKeys.detail(storeId),
    queryFn: () => storesApi.getStoreById(storeId),
    enabled: !!storeId,
    staleTime: 5 * 60 * 1000,
    retry: 1,
    ...options,
  });
};

// Get featured stores
export const useFeaturedStores = (options = {}) => {
  return useQuery({
    queryKey: storesKeys.featured(),
    queryFn: () => storesApi.getFeaturedStores(),
    staleTime: 10 * 60 * 1000, // 10 minutes
    ...options,
  });
};

// Search stores
export const useSearchStores = (query, options = {}) => {
  return useQuery({
    queryKey: storesKeys.search(query),
    queryFn: () => storesApi.searchStores(query),
    enabled: !!query && query.length > 2,
    staleTime: 3 * 60 * 1000,
    ...options,
  });
};

// Prefetch store (useful for optimistic loading)
export const usePrefetchStore = () => {
  const queryClient = useQueryClient();

  return (storeId) => {
    queryClient.prefetchQuery({
      queryKey: storesKeys.detail(storeId),
      queryFn: () => storesApi.getStoreById(storeId),
    });
  };
};

// Invalidate stores cache
export const useInvalidateStores = () => {
  const queryClient = useQueryClient();

  return {
    invalidateAll: () => queryClient.invalidateQueries({ queryKey: storesKeys.all }),
    invalidateByCategory: (category) =>
      queryClient.invalidateQueries({ queryKey: storesKeys.byCategory(category) }),
    invalidateStore: (storeId) =>
      queryClient.invalidateQueries({ queryKey: storesKeys.detail(storeId) }),
  };
};

export default {
  useStores,
  useStoresByCategory,
  useStore,
  useFeaturedStores,
  useSearchStores,
  usePrefetchStore,
  useInvalidateStores,
};
