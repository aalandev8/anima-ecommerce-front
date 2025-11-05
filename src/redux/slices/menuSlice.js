// redux/slices/menuSlice.js
import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    isMainMenuOpen: false,
    isUserMenuOpen: false,
    isCategoriesOpen: false,
    isScrolled: false,
    isMobile: window.innerWidth < 768,
  },
  reducers: {
    toggleMainMenu: (state) => {
      state.isMainMenuOpen = !state.isMainMenuOpen;
    },
    toggleUserMenu: (state) => {
      state.isUserMenuOpen = !state.isUserMenuOpen;
    },
    closeUserMenu: (state) => {
      state.isUserMenuOpen = false;
    },
    openCategories: (state) => {
      state.isCategoriesOpen = true;
    },
    closeCategories: (state) => {
      state.isCategoriesOpen = false;
    },
    setScrolled: (state, action) => {
      state.isScrolled = action.payload;
    },
    setIsMobile: (state, action) => {
      state.isMobile = action.payload;
    },
    closeAllMenus: (state) => {
      state.isMainMenuOpen = false;
      state.isUserMenuOpen = false;
      state.isCategoriesOpen = false;
    },
  },
});

export const {
  toggleMainMenu,
  toggleUserMenu,
  closeUserMenu,
  openCategories,
  closeCategories,
  setScrolled,
  setIsMobile,
  closeAllMenus,
} = menuSlice.actions;

export default menuSlice.reducer;
