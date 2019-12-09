import axios from "axios";
import setAuterizationToken from "../utils/setAutorizationToken";

function getCookie(name) {
  let matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" + name.replace(/([.$?*|{}()[\]\\/+^])/g, "\\$1") + "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, options = {}) {
  options = {
    path: "/",
    ...options
  };

  if (options.expires.toUTCString) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie =
    encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }

  document.cookie = updatedCookie;
}

axios.interceptors.request.use(
  function(config) {
    console.log("config", config);
    return config;
  },
  function(error) {
    console.log("conf_error", error);
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function(response) {
    console.log("response", response);
    return response;
  },
  function(error) {
    let refreshToken = document.cookie; //getCookie("refreshToken");
    console.log("refreshToken", refreshToken);
    if (
      error.response.status === 401 &&
      error.response.statusText === "Unauthorized" &&
      refreshToken
    ) {
      setAuterizationToken(refreshToken);
    }

    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // console.log(error.response.status);
    // console.log(error.response.statusText);

    // console.log(getCookie("refreshToken"));
    return Promise.reject(error);
  }
);
