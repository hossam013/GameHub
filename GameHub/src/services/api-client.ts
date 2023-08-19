import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f5f19b4ec0b6490e8c6676d539fdf9c7",
  },
});
