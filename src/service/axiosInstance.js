import axios from "axios";

//* local storage'dan token'ı oku
const escapedToken = JSON.parse(localStorage.getItem("persist:root"))?.token;
const token = escapedToken && JSON.parse(escapedToken);

const axiosWithToken = axios.create({
  baseURL: "https://13832.fullstack.clarusway.com/",
  headers: { Authorization: `Token ${token}` },
});
