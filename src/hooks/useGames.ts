import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import apiClient, { FetchDataResponse } from "../services/api-client";
import { Platform } from "./useParentPlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  genres: { slug: string }[];
  rating_top: number;
}

/* const useGames = (gameQuery: GameQuery) => {
  const { data, error, isLoading } = useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchTerm,
      },
    },
    [gameQuery]
  );
  const games = data;

  return { games, error, isLoading };
}; */

const useGames = (gameQuery: GameQuery) =>
  useQuery<FetchDataResponse<Game>>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient
        .get<FetchDataResponse<Game>>("/games", {
          params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchTerm,
          },
        })
        .then((res) => res.data),
    staleTime: 5 * 60 * 1000, //5min
  });

export default useGames;
