import { Grid, Image } from "@chakra-ui/react";
import useGameScreenshots from "../hooks/useGameScreenshots";

interface Props {
  gameId: number | string;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useGameScreenshots(gameId);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={2}>
      {data?.results.map((screenshot, index) => (
        <Image
          key={screenshot.id}
          width="100%"
          src={screenshot.image}
          alt={`screenshot${index}`}
        />
      ))}
    </Grid>
  );
};

export default GameScreenshots;
