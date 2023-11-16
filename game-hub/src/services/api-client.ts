import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4a27476f71204ac3b05b0a9d2eeee157",
  },
});
