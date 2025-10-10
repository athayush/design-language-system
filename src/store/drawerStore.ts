import { create } from "zustand";

type DrawerStore = {
  state: Record<string, boolean>;
  openDrawer: (id: string) => void;
  closeDrawer: (id: string) => void;
  toggleDrawer: (id: string) => void;
  isOpen: (id: string) => boolean;
};

export const useDrawerStore = create<DrawerStore>((set, get) => ({
  state: {},
  openDrawer: id =>
    set(state => ({
      state: { ...state.state, [id]: true },
    })),
  closeDrawer: id =>
    set(state => ({
      state: { ...state.state, [id]: false },
    })),
  toggleDrawer: id =>
    set(state => ({
      state: { ...state.state, [id]: !state.state[id] },
    })),
  isOpen: id => get().state[id] ?? false,
}));
