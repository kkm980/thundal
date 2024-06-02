import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profileSlice",
  initialState: {
    isActiveStore: false,
    isLoggedinStore: false,
    isSignedupStore: false,
    favCelebArrStore: [],
    blockedStore: false
  } as any,
  reducers: {
    setIsActiveStore: (state, action) => {
      return { ...state, isActiveStore: action?.payload?.tasks };
    }
  },
});

export const { setIsActiveStore } =
profileSlice.actions;
export default profileSlice.reducer;
