import { createSlice } from "@reduxjs/toolkit";

const initialState={
  sidebar: {
    open: window.innerWidth > 768 ? true : false
  }
}

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    barClicked: (state, action) => {
      
      const bar = {
        open: action.payload
      }

      state.sidebar.open = (bar.open);
    },
  }
})

export const { barClicked } = sidebarSlice.actions

export default sidebarSlice.reducer