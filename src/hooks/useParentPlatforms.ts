import useData from "./useData";
import { Platform } from "./useGames";


const useGenres = () => {
    const { data, error, isLoading} = useData<Platform>('/platforms/lists/parents');
    const platforms = data;

    return { platforms, error, isLoading };
}


export default useGenres