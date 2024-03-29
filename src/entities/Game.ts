import Genre from "./Genre";
import Platform from "./Platform";
import Publisher from "./Pubilsher";

export default interface Game {
  id: number;
  name: string;
  slug: string;
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  genres: Genre[];
  rating_top: number;
  publishers: Publisher[];
}
