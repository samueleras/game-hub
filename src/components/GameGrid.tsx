import { useEffect, useState } from "react";
import gamesService, { Game } from "../services/games-service";
import { CanceledError } from "axios";
import { Text } from "@chakra-ui/react";

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const { request, cancel } = gamesService.getAllGames();
    request
      .then((res) => {
        console.log(res.data.results);
        setGames(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => cancel();
  }, []); //Loads once

  return (
    <>
      <div>GameGrid</div>
      {error && <Text color={"red.400"}>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
