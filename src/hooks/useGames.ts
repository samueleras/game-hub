import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import APIClient, { FetchDataResponse } from "../services/api-client";
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

const useGames = (gameQuery: GameQuery) =>
  useQuery<FetchDataResponse<Game>>({
    queryKey: ["games", gameQuery],
    queryFn: () => {
      let client: APIClient<Game> = new APIClient("/games");
      return client.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchTerm,
        },
      });
    },
    staleTime: 5 * 60 * 1000, //5min
  });

export default useGames;
