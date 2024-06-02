import { createSlice } from "@reduxjs/toolkit";

export type PopupContent = {
  txn: {
    hash: string;
  };
};

export enum ApplicationModal {
  WALLET,
  SETTINGS,
  SELF_CLAIM,
  ADDRESS_CLAIM,
  CLAIM_POPUP,
  MENU,
  DELEGATE,
  VOTE,
  POOL_OVERVIEW_OPTIONS,
  NETWORK_SELECTOR,
  PRIVACY_POLICY,
  UK_DISCLAIMER,
}

export interface ApplicationState {
  readonly openModal: ApplicationModal | null;
}

const initialState: ApplicationState = {
  openModal: null,
};

const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {
    setOpenModal(state, action) {
      return {
        ...state,
        openModal: action.payload,
      };
    },
  },
});

export const { setOpenModal } = applicationSlice.actions;
export default applicationSlice.reducer;
