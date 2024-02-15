import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import platforms from "../data/platforms";
import Platform from "../entities/Platform";
import APIClient, { FetchDataResponse } from "../services/apiClient";

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
