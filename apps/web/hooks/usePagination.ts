'use client';

import { useState, useMemo } from 'react';

export interface PaginationOptions {
  initialPage?: number;
  initialPerPage?: number;
  totalItems?: number;
}

export interface PaginationState {
  currentPage: number;
  perPage: number;
  totalPages: number;
  totalItems: number;
  startIndex: number;
  endIndex: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export interface PaginationActions {
  setPage: (page: number) => void;
  nextPage: () => void;
  prevPage: () => void;
  setPerPage: (perPage: number) => void;
  setTotalItems: (total: number) => void;
  reset: () => void;
}

/**
 * Custom hook for managing pagination logic
 * 
 * @param options - Configuration options
 * @returns Pagination state and actions
 * 
 * @example
 * const { state, actions } = usePagination({
 *   initialPage: 1,
 *   initialPerPage: 10,
 *   totalItems: 100,
 * });
 * 
 * // Use state.currentPage, state.totalPages, etc.
 * // Call actions.nextPage(), actions.prevPage(), etc.
 */
export function usePagination(options: PaginationOptions = {}) {
  const {
    initialPage = 1,
    initialPerPage = 10,
    totalItems: initialTotalItems = 0,
  } = options;

  const [currentPage, setCurrentPage] = useState(initialPage);
  const [perPage, setPerPage] = useState(initialPerPage);
  const [totalItems, setTotalItems] = useState(initialTotalItems);

  const state: PaginationState = useMemo(() => {
    const totalPages = Math.ceil(totalItems / perPage) || 1;
    const startIndex = (currentPage - 1) * perPage;
    const endIndex = Math.min(startIndex + perPage, totalItems);

    return {
      currentPage,
      perPage,
      totalPages,
      totalItems,
      startIndex,
      endIndex,
      hasNextPage: currentPage < totalPages,
      hasPrevPage: currentPage > 1,
    };
  }, [currentPage, perPage, totalItems]);

  const actions: PaginationActions = {
    setPage: (page: number) => {
      const validPage = Math.max(1, Math.min(page, state.totalPages));
      setCurrentPage(validPage);
    },

    nextPage: () => {
      if (state.hasNextPage) {
        setCurrentPage(prev => prev + 1);
      }
    },

    prevPage: () => {
      if (state.hasPrevPage) {
        setCurrentPage(prev => prev - 1);
      }
    },

    setPerPage: (newPerPage: number) => {
      setPerPage(newPerPage);
      setCurrentPage(1); // Reset to first page when changing perPage
    },

    setTotalItems: (total: number) => {
      setTotalItems(total);
    },

    reset: () => {
      setCurrentPage(initialPage);
      setPerPage(initialPerPage);
      setTotalItems(initialTotalItems);
    },
  };

  return {
    state,
    actions,
  };
}

/**
 * Hook for paginating an array of items
 * @param items - Array of items to paginate
 * @param options - Pagination options
 * @returns Paginated items and pagination controls
 */
export function usePaginatedArray<T>(items: T[], options: PaginationOptions = {}) {
  const { state, actions } = usePagination({
    ...options,
    totalItems: items.length,
  });

  const paginatedItems = useMemo(() => {
    return items.slice(state.startIndex, state.endIndex);
  }, [items, state.startIndex, state.endIndex]);

  return {
    items: paginatedItems,
    ...state,
    ...actions,
  };
}
