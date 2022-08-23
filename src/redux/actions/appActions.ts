import {
  SET_DARK_THEME,
  SET_LIGHT_THEME,
  SET_DRAWER_OPEN,
  SET_DRAWER_CLOSE,
  SET_QR_CLOSED,
  SET_QR_OPEN,
  SET_ROLE_FILTER,
  SET_SECOND_DRAWER_OPEN,
  SET_SECOND_DRAWER_CLOSE,
} from "../types";

export const switchTheme = (isDark: boolean) => (dispatch: any) => {
  if (isDark) {
    localStorage.setItem("theme", "dark");
    dispatch({
      type: SET_DARK_THEME,
      payload: null,
    });
  } else {
    localStorage.setItem("theme", "light");
    dispatch({
      type: SET_LIGHT_THEME,
      payload: null,
    });
  }
};

export const toggleDrawer =
  (newState: boolean, data?: any) => (dispatch: any) => {
    if (newState) {
      console.log("newState1", newState);

      dispatch({
        type: SET_DRAWER_OPEN,
        payload: data,
      });
    } else {
      dispatch({
        type: SET_DRAWER_CLOSE,
        payload: null,
      });
    }
  };

export const toggleDrawerSecond =
  (newState: boolean, data?: any) => (dispatch: any) => {
    if (newState) {
      dispatch({
        type: SET_SECOND_DRAWER_OPEN,
        payload: data,
      });
    } else {
      dispatch({
        type: SET_SECOND_DRAWER_CLOSE,
        payload: null,
      });
    }
  };

export const toggleQR = (newState: boolean) => (dispatch: any) => {
  if (newState) {
    dispatch({
      type: SET_QR_OPEN,
      payload: null,
    });
  } else {
    dispatch({
      type: SET_QR_CLOSED,
      payload: null,
    });
  }
};

export const setRoleFilter = (value: string) => (dispatch: any) => {
  dispatch({
    type: SET_ROLE_FILTER,
    payload: value,
  });
};
