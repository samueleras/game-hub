import useData from "./useData";

export interface Platform {
    name: string;
    id: number;
    slug: string;
}

const useGenres = () => {
    const { data, error, isLoading} = useData<Platform>('/platforms/lists/parents');
    const platforms = data;

    return { platforms, error, isLoading };
}


export default useGenres