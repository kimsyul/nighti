import { create } from 'zustand';

interface SearchStore {
  search: string;
  isOpen: boolean;
  setSearch: (search: string) => void;
  setIsOpen: (isOpen: boolean) => void;
}

export const useSearchStore = create<SearchStore>((set) => ({
  search: '',
  isOpen: false,
  setSearch: (search) => set({ search: search }),
  setIsOpen: (isOpen) => set({ isOpen: isOpen }),
}));
