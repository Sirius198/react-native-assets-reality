import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { API_URL } from "../redux/actions/global";
// let Authorization = localStorage.getItem("jwtToken");
let Authorization = AsyncStorage.getItem("jwtToken");
export default axios.create({
  baseURL: API_URL,
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": "true",
    Authorization: Authorization ? `Bearer ${Authorization}` : "",
    "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS",
  },
});
