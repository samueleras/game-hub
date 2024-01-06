import { Text } from "@chakra-ui/react";
import useGames, { Game } from "../hooks/useGames";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      <div>GameGrid</div>
      {error && <Text color={"red.400"}>{error}</Text>}
      <ul>
        {games.map((game: Game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
