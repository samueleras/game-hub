import useData from "./useData";


export interface Genre {
    id: number;
    name: string;
}


const useGenres = () => {
    const { data, error, isLoading} = useData<Genre>('/genres');
    const genres = data;

    return { genres, error, isLoading };
}


export default useGenres