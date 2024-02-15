import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { GameTrailer } from "../entities/GameTrailer";
import APIClient, { FetchDataResponse } from "../services/apiClient";

const useGameTrailers = (gameId: string | number) => {
  const apiClient: APIClient<GameTrailer> = new APIClient<GameTrailer>(
    `/games/${gameId}/movies`
  );
  return useQuery<FetchDataResponse<GameTrailer>>({
    queryKey: ["gameTrailer", gameId],
    queryFn: () => {
      return apiClient.getAll(); // the ! says that this variable is never undefined.
      //We can be sure of that because that route is only used if there is a slug in the url.
      //Else the errorpage would be rendered
    },
    staleTime: ms("24h"),
  });
};

export default useGameTrailers;
