import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface State {
  isNodePalleteSideBarActive: boolean;
}

const initialState: State = {
  isNodePalleteSideBarActive: false,
};

export const navigationSlice = createSlice({
  name: 'navigationSlice',
  initialState: initialState,
  reducers: {
    setNodePalleteSideBarStatus: (state, action: PayloadAction<boolean>) => {
      state.isNodePalleteSideBarActive = action.payload;
    },
    toogleNodePalleteSideBarStatus: (state) => {
      state.isNodePalleteSideBarActive = !state.isNodePalleteSideBarActive;
    },
  },
});

export const { setNodePalleteSideBarStatus, toogleNodePalleteSideBarStatus } = navigationSlice.actions;

export default navigationSlice.reducer;
