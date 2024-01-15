import { GameQuery } from "../App";
import useData from "./useData";

export interface Platform {
    name: string;
    id: number;
    slug: string;
}
export interface Game {
    id: number,
    name: string
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    genres: { slug: string }[];
}

const useGames = (gameQuery: GameQuery) => {

    const { data, error, isLoading} = useData<Game>('/games', { params: { genres: gameQuery.genre?.id, parent_platforms: gameQuery.platform?.id, ordering: gameQuery.sortOrder, search: gameQuery.searchTerm  }}, [gameQuery]);
    const games = data;

    return { games, error, isLoading };
}


export default useGames