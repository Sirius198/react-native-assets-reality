import {
  GET_ERRORS,
  NEW_PORTFOLIO,
  GET_PORT_BY_OP,
  GET_PORT,
  OPERATION_LOADING,
  CLEAR_PORTFOLIOS,
  SET_PORT,
} from "../types";
import headers from "./headers";
import { getAssets } from "./assetActions";
import http from "../../utils/https-common";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const createPortfolio =
  (payload: any, id: string) => (dispatch: any) => {
    dispatch({ type: OPERATION_LOADING });

    http
      .post(`/operation/${id}/portfolio`, payload, headers())
      .then((res) => {
        const data = res.data.data;
        dispatch({
          type: NEW_PORTFOLIO,
          payload: data,
        });
        dispatch(getPortfoliosByOperation(id));
      })
      .catch((err) => {
        dispatch({
          type: GET_ERRORS,
          payload: err,
        });
      });
  };

export const getPortfoliosByOperation = (id: string) => (dispatch: any) => {
  dispatch({ type: OPERATION_LOADING });
  http
    .get(`/operation/${id}/portfolio?page=1&limit=50`, headers())
    .then((res) => {
      const data = res.data.data;
      if (data.length > 0) {
        setPortfolio(data[0]);
      }
      dispatch({
        type: GET_PORT_BY_OP,
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

export const getPortfolio = (id: string) => (dispatch: any) => {
  dispatch({ type: OPERATION_LOADING });

  http
    .get(`/portfolio/${id}`, headers())
    .then((res) => {
      const data = res.data.data;
      dispatch({
        type: GET_PORT,
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

export const clearLoadedPortfolios = () => (dispatch: any) => {
  return dispatch({
    type: CLEAR_PORTFOLIOS,
  });
};

export const setPortfolio = (data: any) => (dispatch: any) => {
  return dispatch({
    type: SET_PORT,
    payload: data,
  });
};

export const getGraphData = (data: any) => async (dispatch: any) => {
  let token = await AsyncStorage.getItem("jwtToken");
  // console.log(Authorization)
  const tt = axios.create({
    baseURL: "https://wxebsd8cy6.execute-api.eu-west-2.amazonaws.com",
    headers: {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Methods": "GET, PUT, POST",
    },
  });
  tt.post('/Prod', data, headers(token))
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
};
// getPortsByUser

// GetAssetsByPortfolio

// getPortById
