import apiClient from "./api-client"

export interface Game {
    id: number,
    name: string
}

export interface FetchGamesResponse{
    count: number,
    results: Game[]
}

class GamesService{
    getAllGames(){
        const controller = new AbortController();
        const request = apiClient
        .get<FetchGamesResponse>("/games", {
            signal: controller.signal,
        });
        return { request, cancel: () => controller.abort() }
    }
}

export default new GamesService()