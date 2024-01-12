
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

const useGames = () => {

    const { data, error, isLoading} = useData<Game>('/games');
    const games = data;

    return { games, error, isLoading };
}


export default useGames