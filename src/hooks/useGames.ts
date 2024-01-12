
import useData from "./useData";
import { Genre } from "./useGenres";

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

const useGames = (selectedGenre: Genre | null) => {

    const { data, error, isLoading} = useData<Game>('/games', { params: { genres: selectedGenre?.slug }}, [selectedGenre?.id]);
    const games = data;

    return { games, error, isLoading };
}


export default useGames