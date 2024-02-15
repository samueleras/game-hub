import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import GameScreenshot from "../entities/GameScreenshot";
import APIClient, { FetchDataResponse } from "../services/apiClient";

const useGameScreenshots = (gameId: string | number) => {
  const apiClient: APIClient<GameScreenshot> = new APIClient<GameScreenshot>(
    `/games/${gameId}/screenshots`
  );
  return useQuery<FetchDataResponse<GameScreenshot>>({
    queryKey: ["gameScreenshots", gameId],
    queryFn: apiClient.getAll, // the ! says that this variable is never undefined.
    //We can be sure of that because that route is only used if there is a slug in the url.
    //Else the errorpage would be rendered
    staleTime: ms("24h"),
  });
};

export default useGameScreenshots;
