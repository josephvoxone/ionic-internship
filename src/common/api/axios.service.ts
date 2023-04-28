import controller from "@/common/api/controller.service";
import tokenService from "@/common/api/token.service";
import sessionService from "@/common/api/session.service";
import axios from "axios";

const http = axios.create({
  baseURL: `${process.env.VUE_APP_API}`,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 30000, //timeout 30s
});

// When API request should using token
http.interceptors.request.use(
  async (config: any) => {
    const keys = await tokenService.getToken();
    const id = await sessionService.getID();
    config.headers = {
      "Content-type": "application/json",
      Authorization: `Bearer ${keys}`,
      Identifier: `${id}`,
    };
    return config;
  },
  async (error) => {
    // If token doesnt work
    if (error.response.status === 401 && !error.config._retry) {
      error.config._retry = true;
      const access_token = await tokenService.getToken();
      axios.defaults.headers.common["token"] = access_token;
      return http(error.config);
    }
    return Promise.reject(error);
  }
);

// When response you can use manipulate data
http.interceptors.response.use(
  async (config) => config,
  (error) => {
    // console.error(error.config)
    if (error.code === "ECONNABORTED") {
      controller.toast.errorToast({
        header: "Request Timeout",
        message: `Proses Data terlalu lama.`,
      });
      console.error("Request Timeout", error.config.url);
    } else if (error.code === "ERR_NETWORK") {
      controller.toast.errorToast({
        header: "Gagal Terhubung",
        message: `Mohon periksa jaringan anda.`,
      });
      console.error("Request Timeout", error.config.url);
    } else {
      controller.toast.errorToast({
        message:
          error?.response?.data?.message ||
          error?.response?.data?.errors[0]?.message ||
          error?.response?.data?.data ||
          error?.response?.data?.msg,
      });
      console.error("Request Error", error.config.url);
    }
    return Promise.reject(error);
  }
);

export default http;
