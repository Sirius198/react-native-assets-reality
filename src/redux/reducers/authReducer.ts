import * as types from "../types";
import initState from "./initialState";
// import { toast } from "react-toastify";

export const authReducer = (state = initState.auth, action: any) => {
  switch (action.type) {
    case types.PROFILE_LOADING:
      return { ...state, loading: true };
    case types.GET_USER_PREF:
      // toast.dismiss();
      return { ...state, loading: false };
    case types.SET_CURRENT_USER:
      return {
        ...state,
        userId: action.payload,
        is2FAuthenticated: true,
        loading: false,
      };
    case types.AUTHENTICATE:
      // toast.dismiss();
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.token,
        twoFactor: action.payload.two_factor_enabled,
        org: action.payload.org_id,
        name: action.payload.name,
        role: action.payload.role,
        loading: false,
      };
    case types.GET_USER_ORG:
      // toast.dismiss();

      return { ...state, org: action.payload };
    case types.USER_PREF:
      // toast.dismiss();

      return { ...state, prefs: action.payload, loading: false };
    case types.GET_ERRORS:
      return {
        ...state,
        loading: false,
      };
    case types.GET_QR:
      // toast.dismiss();
      return {
        ...state,
        qrCode: action.payload,
        loading: false,
      };
    case "clear_all":
      return {
        ...state,
        isAuthenticated: false,
        is2FAuthenticated: false,
      }
    case types.LOGOUT:
      return initState.auth;
    default:
      return state;
  }
};
