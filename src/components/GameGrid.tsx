import { Text, SimpleGrid } from "@chakra-ui/react";
import useGames, { Game } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = Array.from(Array(20).keys());

  return (
    <>
      {error && <Text color={"red.400"}>{error}</Text>}
      <SimpleGrid
        columns={{ base: 1, md: 2, xl: 3, "2xl": 5 }}
        spacing={5}
        p={5}
        justifyItems="center"
      >
        {games.map((game: Game) => (
          <GameCard game={game} key={game.id} />
        ))}
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
