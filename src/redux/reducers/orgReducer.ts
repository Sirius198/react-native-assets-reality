import * as types from "../types";
// import { toast } from "react-toastify";

import initState from "./initialState";

export const orgReducer = (state = initState.orgs, action: any) => {
  switch (action.type) {
    case types.ORGS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case types.NEW_ADMIN_USER:
      // toast.dismiss();
      return {
        ...state,
        loading: false,
      };
    case types.GET_MY_ORG:
      // toast.dismiss();
      return {
        ...state,
        loading: false,
        myOrg: action.payload,
      };

    case types.SET_ROLE_FILTER:
      // toast.dismiss();
      return {
        ...state,
        loading: false,
        filterRole: action.payload,
      };

    case types.GET_CUSTODIANS:
      // toast.dismiss();
      return {
        ...state,
        loading: false,
        custodians: action.payload,
      };
    case types.GET_ORG_USERS:
      // toast.dismiss();
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case types.SELECT_ORG:
      // toast.dismiss();
      return {
        ...state,
        selectedOrg: action.payload,
      };
    default:
      return state;
  }
};
