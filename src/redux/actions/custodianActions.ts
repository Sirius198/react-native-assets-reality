import { GET_CUSTODIANS, GET_ERRORS, ORGS_LOADING } from "../types";
import headers from "./headers";
import http from "../../@core/utils/https-common";

export const getCustodians = (data: any) => (dispatch: any) => {
  dispatch({ type: ORGS_LOADING });
  http
    .get(`/org/${data}/custodians`, headers())
    .then((res) => {
      const data = res.data.data;
      dispatch({
        type: GET_CUSTODIANS,
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
