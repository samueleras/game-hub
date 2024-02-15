import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import Game from "../entities/Game";
import gameService from "../services/gameService";

const useGame = (slug?: string) =>
  useQuery<Game>({
    queryKey: ["games", slug],
    queryFn: () => {
      return gameService.get(slug!); // the ! says that this variable is never undefined.
      //We can be sure of that because that route is only used if there is a slug in the url.
      //Else the errorpage would be rendered
    },
    staleTime: ms("24h"),
  });

export default useGame;
