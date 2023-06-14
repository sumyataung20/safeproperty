import axios from "axios";

export default axios.create({
  baseURL: "https://apione.axletechmm.com/api",
  headers: {
    "Content-type": "application/json",
  },
});
