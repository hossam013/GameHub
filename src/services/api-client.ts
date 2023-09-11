import axios, { AxiosRequestConfig } from "axios";
import { FetchResponse } from "../entities/FetchResponse";

export const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: import.meta.env.VITE_API_KEY,
  },
});

export class APIClient<T> {
  endPoint: string;

  constructor(endPoint: string) {
    this.endPoint = endPoint;
  }

  getAll = (config: AxiosRequestConfig) =>
    axiosInstance
      .get<FetchResponse<T>>(this.endPoint, config)
      .then((res) => res.data);
  get = (id: string | number) =>
    axiosInstance.get<T>(this.endPoint + "/" + id).then((res) => res.data);
}
