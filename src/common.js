const PATH = "https://theeasylearnacademy.com/shop/";
export const FILE_NAME = "admin";
export function getBase() {
  return PATH + "ws/";
}
export function showError(error) {
  console.log(error);
  error.code === "ERR_NETWORK"
    ? alert("it seems you are offline, please check your internet connection.")
    : alert("oops something went wrong, please contact administrator");
}
export function getImgBase() {
  return PATH + "images/";
}
export function getConfig(apiAddress, requestMethod = "get", form = null) {
  console.log(apiAddress, requestMethod, form);
  if (requestMethod === "get") {
    return {
      method: requestMethod,
      responseType: "json",
      url: apiAddress,
    };
  } else {
    return {
      method: requestMethod,
      responseType: "json",
      url: apiAddress,
      data: form,
    };
  }
}
