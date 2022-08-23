import * as types from "../types";
import initialState from "./initialState";

export const appReducer = (state = initialState.app, action: any) => {
  switch (action.type) {
    case types.SET_DARK_THEME:
      return {
        ...state,
        isDark: true,
      };
    case types.SET_LIGHT_THEME:
      return {
        ...state,
        isDark: false,
      };
    case types.SET_DRAWER_CLOSE:
      return {
        ...state,
        drawer: false,
      };
    case types.SET_DRAWER_OPEN:
      return {
        ...state,
        drawer: true,
        data: action.payload,
      };
    case types.SET_SECOND_DRAWER_CLOSE:
      return {
        ...state,
        drawersecond: false,
      };
    case types.SET_SECOND_DRAWER_OPEN:
      return {
        ...state,
        drawersecond: true,
        data: action.payload,
      };
    case types.SET_QR_CLOSED:
      return {
        ...state,
        QR: false,
      };
    case types.SET_QR_OPEN:
      return {
        ...state,
        QR: true,
      };
    default:
      return state;
  }
};
