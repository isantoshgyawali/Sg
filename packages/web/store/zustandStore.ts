import { create } from "zustand"

interface BearStoreProps {
}

export const useBearStore = create<BearStoreProps>((set) => ({
    something: 'hello there...'
}))

