import http from "../../utils/https-common";
import {
  ADD_ASSET,
  ADD_PERMISSION,
  GET_ERRORS,
  GET_OP_PERMISSIONS,
  PERMISSIONS_LOADING,
} from "../types";
import { setErrorMessage } from "./errorActions";
import headers from "./headers";

export const getOpPermissions = (id: any) => (dispatch: any) => {
  dispatch({ type: PERMISSIONS_LOADING });
  http
    .get(`/operation/${id}/permission/all`, headers())
    .then((res) => {
      const data = res.data.data;
      dispatch({
        type: GET_OP_PERMISSIONS,
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

export const createPermission = (data: any) => (dispatch: any) => {
  dispatch({ type: PERMISSIONS_LOADING });
  http
    .post(`/permission/add`, data, headers())
    .then((res) => {
      const data = res.data.data;
      dispatch({
        type: ADD_PERMISSION,
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

export const checkUserPermission =
  (data: any, role: string, history: any) => (dispatch: any) => {
    dispatch({ type: PERMISSIONS_LOADING });
    http
      .get(`/operation/${data.operation_id}/permission/check`, headers())
      .then((res) => {
        const data = res.data.data;
        if (data !== []) {
          history.push(`/operation/${data.operation_id}`);
        } else {
          history.push(`/dashboard`);

          setErrorMessage("You do not have access to this case");
        }
      })
      .catch((err) => {
        history.push(`/dashboard`);

        dispatch({
          type: GET_ERRORS,
          payload: "You do not have access to this case",
        });
      });
  };
