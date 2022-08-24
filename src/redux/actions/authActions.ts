import AsyncStorage from "@react-native-async-storage/async-storage";
import http from "../../utils/https-common";
import {
  PROFILE_LOADING,
  GET_ERRORS,
  SET_CURRENT_USER,
  GET_QR,
  AUTHENTICATE,
  GET_USER_ORG,
  GET_USER_PREF,
  SET_USER_PREF,
  USER_PREF,
} from "../types";
import { getTempWallets } from "./assetActions";
import { setErrorMessage } from "./errorActions";

import headers from "./headers";

// Set logged in user
export const setCurrentUser = (decoded: any) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

// 1.Authenticate
export const Authenticate = (payload: any) => (dispatch: any) => {
  dispatch({ type: PROFILE_LOADING });
  http
    .post(`user/authenticate`, payload, headers())

    .then((res) => {
      const data = res.data.data;

      const token = data.token;
      const two2fa = false;
      // const two2fa = data.two_factor_enabled;
      const role = data.role;
      if (role === "super") {
        dispatch(setErrorMessage("You must login on the staff portal"));
      } else {
        dispatch({
          type: AUTHENTICATE,
          payload: data,
        });
        if (!two2fa) {
          dispatch(setup2FA(token));
        }
      }
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

// Get 2FA QR Code
export const setup2FA = (token: string) => (dispatch: any) => {
  dispatch({ type: PROFILE_LOADING });
  http
    .get(`user/${token}/2fa`, headers())
    .then((res) => {
      const data = res.data.data;

      dispatch({
        type: GET_QR,
        payload: data.qr_code,
      });

      // if (data) {
      //   AsyncStorage.setItem("jwtToken", data.ar_token);
      //   dispatch(setCurrentUser(data.user_id));
      // }
    })

    .catch((err) => {
      console.log('setup_err', err);
      dispatch({
        type: GET_ERRORS,
        payload: err,
      });
    });
};

export const confirm2FA = (data: any) => (dispatch: any) => {
  const token = { token: data.code };
  dispatch({ type: PROFILE_LOADING });
  http
    .post(`user/${data.authToken}/2fa`, token, headers())
    .then((res) => {
      const user = res.data.data;
      console.log('user', user)
      if (user) {
        // const ar_token = localStorage.setItem("jwtToken", user.ar_token);
        // localStorage.removeItem("Qrcode");
        const ar_token = AsyncStorage.setItem("jwtToken", user.ar_token);
        AsyncStorage.removeItem("Qrcode");
        dispatch(getUser(user.user_id));
        dispatch(getUserOrg(ar_token));
        dispatch(setCurrentUser(user.user_id));
        dispatch(getTempWallets());
      }
    })
    .catch((err) => {
      console.log(err.response.data)
      dispatch({
        type: GET_ERRORS,
        payload: "There is a problem with your code",
      });
    });
};

export const getUser = (userId: string) => (dispatch: any) => {
  dispatch({ type: PROFILE_LOADING });
  http
    .get(`user/${userId}/prefs`, headers())
    .then((res) => {
      const data = res.data.data;
      dispatch({
        type: USER_PREF,
        payload: data,
      });
    })

    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err,
      });
    });
};

export const setUser =
  (userId: any, filed: string, data: string) => (dispatch: any) => {
    dispatch({ type: PROFILE_LOADING });
    const payload = {
      [filed]: !data,
    };
    http
      .post(`user/${userId}/prefs`, payload, headers())
      .then((res) => {
        const data = res.data.data;
        dispatch(getUser(userId));
        dispatch({
          type: USER_PREF,
          payload: data,
        });
      })

      .catch((err) => {
        dispatch({
          type: GET_ERRORS,
          payload: err,
        });
      });
  };

export const getUserOrg = (data: any) => (dispatch: any) => {
  dispatch({ type: PROFILE_LOADING });
  http
    .get(`org/me`, headers())
    .then((res) => {
      const data = res.data.data;
      console.log(data, 'userorg')
      dispatch({
        type: GET_USER_ORG,
        payload: data[0].id,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: "Cannot Fetch Organization",
      });
    });
};

export const setUserPref = (data: any) => (dispatch: any) => {
  dispatch({ type: PROFILE_LOADING });
  http
    .post(`me/prefs`, headers())
    .then((res) => {
      const data = res.data.data;
      dispatch({
        type: SET_USER_PREF,
        payload: data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: "Cannot Fetch Organization",
      });
    });
};

export const getUserPref = (data: any) => (dispatch: any) => {
  dispatch({ type: PROFILE_LOADING });
  http
    .get(`me/prefs`, headers())
    .then((res) => {
      const data = res.data.data;
      dispatch({
        type: GET_USER_PREF,
        payload: data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: "Cannot User Pref",
      });
    });
};
