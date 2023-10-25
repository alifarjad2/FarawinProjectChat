import create from "zustand";

export const useStore = create((set) => ({
  sharedName: "",
  setSharedName: (value) => set(() => ({ sharedName: value })),
  sharedNumber: "",
  setSharedNumber: (value) => set(() => ({ sharedNumber: value })),
  searchedContact: "",
  setSearchedContact: (value) => set(() => ({ searchedContact: value })),
  sharedContact: "",
  setSharedContact: (value) => set(() => ({ sharedContact: value })),
  refreshChat: "",
  setRefreshChat: (value) => set(() => ({ refreshChat: value })),
  scrollChat: "",
  setScrollChat: (value) => set(() => ({ scrollChat: value })),
  sharedLastMessage: "",
  setsharedLastMessage: (value) => set(() => ({ sharedLastMessage: value })),
}));
