import AsyncStorage from "@react-native-async-storage/async-storage";

export const notiheaders = () => {
  let axiosConfigHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": "true",
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axiosConfigHeaders;
};
export const headers = (AR_Token?: any) => {
  // let Authorization = await AsyncStorage.getItem("jwtToken");
  let Authorization = "AAmtbtItiyyLCQjqYidPWaScTwsByLbkQSJaRIyRoDFtnzRqggroyLoFPQFIlzxS";
  let axiosConfigHeaders = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Credentials": "true",
      "X-Requested-With": "XMLHttpRequest",
      "AR-Token": AR_Token ? AR_Token : `${Authorization}`,
      Authorization: AR_Token ? `Bearer ${AR_Token}` : `Bearer ${Authorization}`,
    },
  };
  return axiosConfigHeaders;
};
export default headers;
