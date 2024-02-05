import axios from "axios";

export interface FetchDataResponse<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0d7651a113f6498ab80e665af8764b2f",
  },
});
