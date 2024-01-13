
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

const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null) => {

    const { data, error, isLoading} = useData<Game>('/games', { params: { genres: selectedGenre?.id, parent_platforms: selectedPlatform?.id  }}, [selectedGenre?.id, selectedPlatform?.id]);
    const games = data;

    return { games, error, isLoading };
}


export default useGames