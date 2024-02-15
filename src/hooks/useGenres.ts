import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../data/genres";
import APIClient, { FetchDataResponse } from "../services/apiClient";
import { Genre } from "../entities/Genre";

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
