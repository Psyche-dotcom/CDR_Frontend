import axios from "axios";
import { getAccessToken } from "../utils";

class HttpService {
  constructor() {
    this.baseUrl = "https://cdr-cloud.onrender.com";
    //process.env.NEXT_PUBLIC_API_URLS;
  }

  postData = async (payload, url) => {
    const AuthStr = "Bearer ".concat(getAccessToken());

    return axios.post(`${this.baseUrl}${url}`, payload, {
      headers: { Authorization: AuthStr },
    });
  };

  postDataWithoutToken = async (payload, url) => {
    return axios.post(`${this.baseUrl}${url}`, payload);
  };

  getData = async (url) => {
    // console.log(url);
    const AuthStr = "Bearer ".concat(getAccessToken());
    // console.log("AuthStr: =>", AuthStr);
    return axios.get(`${this.baseUrl}${url}`, {
      headers: { Authorization: AuthStr },
    });
  };

  getDataWithoutToken = async (url) => {
    // console.log(`${this.baseUrl[`${services}`]}${url}`);
    return axios.get(`${this.baseUrl}${url}`);
  };

  putData = async (formData, url) => {
    const AuthStr = "Bearer ".concat(getAccessToken());
    return axios.put(`${this.baseUrl}${url}`, formData, {
      headers: { Authorization: AuthStr },
    });
  };

  putDataWithoutToken = async (formData, url) => {
    return axios.put(`${this.baseUrl}${url}`, formData);
  };

  deleteData = async (url) => {
    const AuthStr = "Bearer ".concat(getAccessToken());
    return axios.delete(`${this.baseUrl}${url}`, {
      headers: { Authorization: AuthStr },
    });
  };
}
export default HttpService;
