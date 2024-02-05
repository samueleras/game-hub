import { useQuery } from "@tanstack/react-query";
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
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: genres,
  });

export default useGenres;
