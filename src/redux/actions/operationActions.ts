import {
  ASSET_LOADING,
  GET_ERRORS,
  OPERATION_LOADING,
  GET_USER_OPERATIONS,
  NEW_OP,
  SELECT_OP,
  ADD_ASSET,
  GET_ASSET,
} from "../types";
import http from "../../@core/utils/https-common";
import headers from "./headers";
import { checkUserPermission } from "./permissionActions";

// const Airtable = require("airtable");
// var base = new Airtable({ apiKey: "keyep7E4OjDIn6Bc8" }).base(
//   "app0HjRHFoWCbjrnL"
// );

export const createNewOperation = (payload: any) => (dispatch: any) => {
  dispatch({ type: OPERATION_LOADING });
  http
    .post(`/operation/new`, payload, headers())
    .then((res) => {
      const data = res.data.data;
      dispatch({
        type: NEW_OP,
        payload: data,
      });
      dispatch(getOperationsByOrg(payload.organization_id));
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const getOperationsByUser = (dispatch: any) => {
  dispatch({ type: OPERATION_LOADING });
  http
    .get(`/me/operations`, headers())
    .then((res) => {
      const data = res.data.data;
      dispatch({
        type: GET_USER_OPERATIONS,
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

export const getOperationsByOrg = (data: string) => (dispatch: any) => {
  dispatch({ type: OPERATION_LOADING });
  http
    .get(`/org/${data}/operations`, headers())
    .then((res) => {
      const data = res.data.data;
      dispatch({
        type: GET_USER_OPERATIONS,
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

export const selectOperation =
  (data: any, role: string, history: any) => (dispatch: any) => {
    console.log(role);
    if (role !== "admin") {
      dispatch(checkUserPermission(data, role, history));
    } else {
      dispatch({
        type: SELECT_OP,
        payload: data,
      });
      history.push(`/operation/${data.operation_id}`);
    }
  };

export const pinAsset = (data: any) => (dispatch: any) => {
  return dispatch({
    type: ADD_ASSET,
    payload: data,
  });
};
