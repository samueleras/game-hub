import { Text, SimpleGrid } from "@chakra-ui/react";
import useGames, { Game } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from "../hooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre }: Props) => {
  const { games, error, isLoading } = useGames(selectedGenre);
  const skeletons = Array.from(Array(20).keys());

  return (
    <>
      {error && <Text color={"red.400"}>{error}</Text>}
      <SimpleGrid
        columns={{ base: 1, md: 2, xl: 3, "2xl": 5 }}
        spacing={5}
        padding={{ base: 1, md: 2, xl: 5 }}
        justifyItems="center"
      >
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {games.map((game: Game) => {
          return <GameCard game={game} key={game.id} />;
        })}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
