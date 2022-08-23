import {
  GET_ERRORS,
  GROUP_LOADING,
  CREATE_GROUP,
  ADD_TO_GROUP,
  REMOVE_FROM_GROUP,
  GET_GROUPS,
} from "../types";
import http from "../../@core/utils/https-common";
import headers from "./headers";

export const getOrgGroups = (data: any) => (dispatch: any) => {
  dispatch({ type: GROUP_LOADING });
  http
    .get(`/org/groups`, headers())
    .then((res) => {
      const data = res.data.data;
      dispatch({
        type: GET_GROUPS,
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

export const createGroup = (data: any) => (dispatch: any) => {
  dispatch({ type: GROUP_LOADING });
  http
    .post(`org/groups/create`, data, headers())
    .then((res) => {
      const data = res.data.data;
      console.log("data",data);
      
      dispatch({
        type: CREATE_GROUP,
        payload: data,
      });
      dispatch(getOrgGroups(data.id));
    })
    .catch((err) => {
      dispatch({
        types: GET_ERRORS,
        payload: err,
      });
    });
};

export const addToGroup = (data: string) => (dispatch: any) => {
  dispatch({ type: GROUP_LOADING });
  http
    .post(`org/groups/add`, data, headers())
    .then((res) => {
      const data = res.data.data;
      dispatch({
        type: ADD_TO_GROUP,
        payload: data,
      });
    })
    .catch((err) => {
      dispatch({
        types: GET_ERRORS,
        payload: err,
      });
    });
};

export const removeFromGroup = (data: string) => (dispatch: any) => {
  dispatch({ type: GROUP_LOADING });
  http
    .post(`org/groups/remove`, data, headers())
    .then((res) => {
      const data = res.data.data;
      dispatch({
        type: REMOVE_FROM_GROUP,
        payload: data,
      });
    })
    .catch((err) => {
      dispatch({
        types: GET_ERRORS,
        payload: err,
      });
    });
};
