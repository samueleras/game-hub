import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient from "../services/api-client";
import { Game } from "./useGames";

const useGame = (slug?: string) =>
  useQuery<Game>({
    queryKey: ["games", slug],
    queryFn: () => {
      let client: APIClient<Game> = new APIClient(`/games`);
      return client.get(slug!); // the ! says that this variable is never undefined.
      //We can be sure of that because that route is only used if there is a slug in the url.
      //Else the errorpage would be rendered
    },
    staleTime: ms("24h"),
  });

export default useGame;
