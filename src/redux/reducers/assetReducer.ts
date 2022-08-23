import * as types from "../types";
// import { toast } from "react-toastify";

import initState from "./initialState";

export const assetReducer = (state = initState.assets, action: any) => {
  switch (action.type) {
    case types.ASSET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case types.NEW_PORTFOLIO:
      return {
        ...state,
        loading: false,
      };
    case types.ADD_ASSET:
      // toast.success("Added ", action.payload.asset_type);
      return {
        ...state,
        // loading: false,
      };
    case types.SET_PORT:
      return {
        ...state,
        assets: [],
        loading: false,
      };
    case types.SELECT_OP:
      return {
        ...state,
        assets: [],
        loading: false,
      };
    case types.GET_ASSET:
      return {
        ...state,
        assets: action.payload,
        loading: false,
      };
    case types.GET_TEMP_WALLETS:
      return {
        ...state,
        tempWallets: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
