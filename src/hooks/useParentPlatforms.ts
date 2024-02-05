import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchDataResponse } from "../services/api-client";

import { Platform } from "./useGames";
import platforms from "../data/platforms";

const usePlatforms = () =>
  useQuery<FetchDataResponse<Platform>>({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchDataResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: platforms,
  });
export default usePlatforms;
