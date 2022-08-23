// import isEmpty from '../../utils/validation/is-empty';
import * as types from "../types";

import initState from "./initialState";
// import { toast } from "react-toastify";

export const errorReducer = (state = initState.error, action: any) => {
  switch (action.type) {
    case types.GET_ERRORS:
      // toast.dismiss();
      // toast.error(action.payload.message);
      return action.payload;
    case types.CLEAR_ERRORS:
      return {};
    default:
      return state;
  }
};
