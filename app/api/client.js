import axios from "axios";

export default axios.create({
  baseURL: "http://192.168.42.111:3000/api/",
});
