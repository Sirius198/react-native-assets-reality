import * as types from "../types";
import initialState from "./initialState";
// import { toast } from "react-toastify";

export const permissionsReducer = (
  state = initialState.permissions,
  action: any
) => {
  switch (action.type) {
    case types.PERMISSIONS_LOADING:
      return {
        loading: true,
      };

    case types.ADD_PERMISSION:
      // toast.success("Updated Case Access");
      return {
        ...state,
        loading: false,
      };

    case types.CREATE_CLIENT:
      // toast.dismiss();

      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
