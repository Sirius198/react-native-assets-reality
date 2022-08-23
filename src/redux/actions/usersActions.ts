import {
  CREATE_NEW_USER,
  GET_ERRORS,
  GET_MY_ORG,
  GET_ORG_USERS,
  MODIFY_USER,
  ORGS_LOADING,
} from "../types";
import http from "../../@core/utils/https-common";
import headers from "./headers";

export const createUser = (data: any) => (dispatch: any) => {
  http
    .post(`/user/new`, data, headers())
    .then((res) => {
      dispatch({
        type: CREATE_NEW_USER,
        payload: res.data.data,
      });

      dispatch(getOrgUsers(data.payload[0].organization.id));
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: GET_ERRORS,
        payload: err,
      });
    });
};

export const modifyUser = (payload: any, id: any) => (dispatch: any) => {
  http
    .put(`/user/${id}/modify`, payload, headers())
    .then((res) => {
      const data = res.data.data;
      dispatch({
        type: MODIFY_USER,
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

export const getOrgUsers = (id: any) => (dispatch: any) => {
  http
    .get(`/org/${id}/users`, headers())

    .then((res) => {
      const data = res.data.data;
      dispatch({
        type: GET_ORG_USERS,
        payload: data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const getMyOrg = () => (dispatch: any) => {
  dispatch({ type: ORGS_LOADING });
  http
    .get(`/org/me`, headers())

    .then((res) => {
      const data = res.data.data;
      dispatch({
        type: GET_MY_ORG,
        payload: data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};
