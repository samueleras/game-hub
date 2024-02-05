import { Text, SimpleGrid } from "@chakra-ui/react";
import useGames, { Game } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { GameQuery } from "../App";
import { Button } from "@chakra-ui/react";
import React from "react";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const {
    data: games,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
  } = useGames(gameQuery);
  const skeletons = Array.from(Array(20).keys());

  if (error) return <Text color={"red.400"}>{error.message}</Text>;

  return (
    <>
      <SimpleGrid
        columns={{ base: 1, md: 2, xl: 3, "2xl": 4 }}
        spacing={5}
        padding={{ base: 1, md: 2, xl: 5 }}
        justifyItems="center"
      >
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {games?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game: Game) => (
              <GameCard game={game} key={game.id} />
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      <Button
        disabled={isFetchingNextPage}
        colorScheme="blue"
        onClick={() => fetchNextPage()}
      >
        {isFetchingNextPage ? "Fetching..." : "Load More"}
      </Button>
    </>
  );
};

export default GameGrid;
