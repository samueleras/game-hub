import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import platforms from "../data/platforms";
import APIClient, { FetchDataResponse } from "../services/api-client";

export interface Platform {
  name: string;
  id: number;
  slug: string;
}

const usePlatforms = () =>
  useQuery<FetchDataResponse<Platform>>({
    queryKey: ["platforms"],
    queryFn: () => {
      let client: APIClient<Platform> = new APIClient(
        "/platforms/lists/parents"
      );
      return client.getAll();
    },
    staleTime: ms("24h"),
    initialData: platforms,
  });
export default usePlatforms;
