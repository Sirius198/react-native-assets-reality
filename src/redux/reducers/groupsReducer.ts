import * as types from "../types";
import initialState from "./initialState";
// import { toast } from "react-toastify";

export const groupReducer = (state = initialState.groups, action: any) => {
  switch (action.type) {
    case types.GROUP_LOADING:
      return {
        ...state,
        loading: true,
      };
    case types.CREATE_GROUP:
      // toast.dismiss();
      return {
        ...state,
        loading: false,
      };
    case types.GET_GROUPS:
      // toast.dismiss();
      
      return {
        ...state,
        group_data:action.payload,
        loading: false,
      };
    case types.ADD_TO_GROUP:
      // toast.dismiss();

      return {
        ...state,
        loading: false,
      };

    case types.REMOVE_FROM_GROUP:
      // toast.dismiss();

      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
