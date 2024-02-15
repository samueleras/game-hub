import { keepPreviousData, useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import { Game } from "../entities/Game";
import useGameQueryStore from "../gamequery/store";
import { FetchDataResponse } from "../services/apiClient";
import gameService from "../services/gameService";

const useGames = () => {
  const { gameQuery } = useGameQueryStore();
  return useInfiniteQuery<FetchDataResponse<Game>>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam }: any) => {
      return gameService.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
          page_size: gameQuery.pageSize,
        },
      });
    },
    staleTime: ms("24h"),
    initialPageParam: 1,
    placeholderData: keepPreviousData,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
};

export default useGames;
