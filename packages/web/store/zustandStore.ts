import { create } from "zustand"

export const useBearStore = create((set) => ({
    isLoading: false,
    setLoading: (status: boolean) => {
        set({ isLoading: status})
    }
}))

