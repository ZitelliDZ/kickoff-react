import { createSlice } from '@reduxjs/toolkit';

const initSidebar = localStorage.getItem('sidebar') ?? 'true';

export const sidebarSlice = createSlice({
  name: 'auth',
  initialState: {
    sidebar: initSidebar === 'true' ? true : false,
    menu: false,
  },

  reducers: {
    toggleSidebar: (state) => {
      state.sidebar = !state.sidebar;
      localStorage.setItem('sidebar', state.sidebar.toString());
    },
    showMenu: (state) => {
      state.menu = true;
    },
    hiddenMenu: (state) => {
      state.menu = false;
    },
    toggleMenu: (state) => {
      state.menu = !state.menu;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleSidebar, showMenu, hiddenMenu, toggleMenu } =
  sidebarSlice.actions;
