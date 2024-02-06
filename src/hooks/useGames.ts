import { keepPreviousData, useInfiniteQuery } from "@tanstack/react-query";
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
  useInfiniteQuery<FetchDataResponse<Game>>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam }: any) => {
      let client: APIClient<Game> = new APIClient("/games");
      return client.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchTerm,
          page: pageParam,
          page_size: gameQuery.pageSize,
        },
      });
    },
    staleTime: 5 * 60 * 1000, //5min
    initialPageParam: 1,
    placeholderData: keepPreviousData,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });

export default useGames;
