import axios from "axios";
import setAuterizationToken from "../utils/setAutorizationToken";
import { store } from "../redux/store";
import { fetchMe } from "../redux/actions";

function getCookie(name) {
  let matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" + name.replace(/([.$?*|{}()[\]\\/+^])/g, "\\$1") + "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

let refreshToken = getCookie("refreshToken");
// console.log("refreshToken1", refreshToken);
const getTokens = async () => {
  return await axios({
    method: "POST",
    url: "https://beeweb-2536.herokuapp.com/users/refresh-tokens",
    data: { refreshToken }
  });
};

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
    if (response.data.accessToken) {
      console.log("asdfg");
      localStorage.jwtToken = response.data.accessToken;
      document.cookie = `refreshToken=${response.data.refreshToken}`;
      refreshToken = getCookie("refreshToken");
      setAuterizationToken(localStorage.jwtToken);
      store.dispatch(fetchMe());
    }
    return response;
  },
  function(error) {
    // console.log("refreshToken2", refreshToken);
    if (
      error.response.status === 401 &&
      error.response.statusText === "Unauthorized" &&
      refreshToken
    ) {
      getTokens();
    }

    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // console.log(error.response.status);
    // console.log(error.response.statusText);

    // console.log(getCookie("refreshToken"));
    return Promise.reject(error);
  }
);
