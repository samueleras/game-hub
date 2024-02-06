import axios, { AxiosRequestConfig } from "axios";

export interface FetchDataResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0d7651a113f6498ab80e665af8764b2f",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config?: AxiosRequestConfig) =>
    axiosInstance
      .get<FetchDataResponse<T>>(this.endpoint, config)
      .then((res) => res.data);

  getItem = (id?: number, config?: AxiosRequestConfig) => {
    if (id === undefined) return null as T;
    return axiosInstance
      .get<T>(this.endpoint + "/" + id, config)
      .then((res) => res.data);
  };
}

export default APIClient;
