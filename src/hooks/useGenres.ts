import useData from "./useData";


export interface Genre {
    id: number;
    name: string;
    image_background: string;
    slug: string;
}


const useGenres = () => {
    const { data, error, isLoading} = useData<Genre>('/genres');
    const genres = data;

    return { genres, error, isLoading };
}


export default useGenres