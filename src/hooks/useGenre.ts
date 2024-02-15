import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../data/genres";
import Genre from "../entities/Genre";
import APIClient from "../services/apiClient";

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
