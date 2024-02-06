import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../data/genres";
import APIClient, { FetchDataResponse } from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery<FetchDataResponse<Genre>>({
    queryKey: ["genres"],
    queryFn: () => {
      let client: APIClient<Genre> = new APIClient("/genres");
      return client.getAll();
    },
    staleTime: ms("24h"),
    initialData: genres,
  });

export default useGenres;
