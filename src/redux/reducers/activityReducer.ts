import * as types from "../types";
// import { toast } from "react-toastify";

import initState from "./initialState";

export const activityReducer = (state = initState.activity, action: any) => {
  switch (action.type) {
    case types.ACTIVITY_LOADING:
      return {
        ...state,
        loading: true,
      };
    case types.GET_ACTIVITY:
      // toast.dismiss();
      return {
        ...state,
        operations: action.payload,
        loading: false,
      };
    case types.SET_FILTER_DATA:
      return {
        ...state,
        filter_data: action.payload,
        loading: false,
      };
    case types.SET_CALENDER_DATA:
      return {
        ...state,
        calender_data: action.payload,
        loading: false,
      };
    case types.SET_CLIENT_DATA:
      return {
        ...state,
        client_data: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
