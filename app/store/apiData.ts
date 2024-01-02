import { create } from 'zustand'
export const useApiDataStore = create((set) => ({
    apiDetails: {},
    apiSummary: {},
    firstLoadPending: true,
    setApiDetails: (filter: any) => set((state: any) => ({ ...state, ...{apiDetails:filter}})),
    setFirstLoadPending: (filter: boolean) => set((state: any) => ({ ...state, ...{firstLoadPending:filter}}))
  }))