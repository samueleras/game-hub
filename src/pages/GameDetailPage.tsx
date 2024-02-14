import { Heading, Spinner, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import { useParams } from "react-router-dom";

const GamePage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;
  //Throws error if there is an error or if the game is undefined.
  //Therefore no need for optional chaining (game?) in the jsx

  return (
    <>
      <Heading>{game.name}</Heading>
      <Text>{game.description_raw}</Text>
    </>
  );
};

export default GamePage;
