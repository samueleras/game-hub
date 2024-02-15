import { Game } from "../entities/Game";
import APIClient from "./apiClient";

const gameService: APIClient<Game> = new APIClient<Game>(`/games`);

export default gameService;
