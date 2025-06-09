import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware';

import { delay } from '../utils/mockDelay';
import { fetchproductByLocation } from '../api/apiClient'
import { Product } from '../types/types'

export interface ProductState {
  storeProducts: (data: Product[]) => void
  fetchProducts: (postcode: string, area: string, signal: AbortSignal) => Promise<void>
  products: Product[] | []
  error: string | null
  loading: boolean
}
export const useProductStore = create<ProductState>()(
  persist(
    (set) => ({
      products: [],
      loading: false,
      error: null,
      storeProducts: (data) =>
        set(() => ({
          products: data
        })),
      fetchProducts: async (postcode: string, area: string, signal: AbortSignal) => {
        set({ loading: true, error: null })
          try {
        await delay(1000, signal);
          const data = await fetchproductByLocation(postcode, area, signal)
          set({
            products: data,
            loading: false
          })
        } catch (error) {
          if (error instanceof DOMException && error.name === 'AbortError') return
          const errorMessage = error instanceof Error ? error.message : 'Failed to fetch products'
          set({ error: errorMessage, loading: false })
        }
      }
    }),
    {
      name: 'product-storage',
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({ products: state.products })
    }
  )
)
