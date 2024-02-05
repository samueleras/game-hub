import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import apiClient, { FetchDataResponse } from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => {
  const fetchGenres = () => {
    return apiClient
      .get<FetchDataResponse<Genre>>("/genres")
      .then((res) => res.data);
  };

  return useQuery<FetchDataResponse<Genre>>({
    queryKey: ["genres"],
    queryFn: fetchGenres,
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: genres,
  });
};

export default useGenres;
