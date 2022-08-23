import {
  GET_ERRORS,
  GET_ACTIVITY,
  SET_FILTER_DATA,
  SET_CALENDER_DATA,
  ACTIVITY_LOADING,
  SET_CLIENT_DATA,
} from "../types";
import http from "../../@core/utils/https-common";
import headers from "./headers";

export const getActivity = (data: string) => (dispatch: any) => {
  dispatch({ type: ACTIVITY_LOADING });
  http
    .get(`/audits`, headers())
    .then((res) => {
      const data = res.data.data;
      dispatch({
        type: GET_ACTIVITY,
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

export const filterdata = (data: any) => (dispatch: any) => {
  dispatch({
    type: SET_FILTER_DATA,
    payload: data,
  });
};
export const calenderdata = (data: any) => (dispatch: any) => {
  dispatch({
    type: SET_CALENDER_DATA,
    payload: data,
  });
};

export const clientdata = (data: any) => (dispatch: any) => {
  dispatch({
    type: SET_CLIENT_DATA,
    payload: data,
  });
};
