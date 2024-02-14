import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import genres from "../data/genres";
import ms from "ms";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenre = (id?: number) =>
  useQuery<Genre>({
    queryKey: ["genre", id],
    queryFn: () => {
      let client: APIClient<Genre> = new APIClient(`/genres`);
      return client.get(id);
    },
    staleTime: ms("24h"),
    initialData: genres.results.find((genre) => genre.id === id),
  });

export default useGenre;
