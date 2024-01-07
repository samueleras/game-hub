import { Card, CardBody, Stack, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card maxW="md" overflow={"hidden"}>
      <Image src={game.background_image} alt={game.name} />
      <CardBody>
        <Stack mt="0" spacing="3">
          {game.parent_platforms.map(({ platform }) => (
            <Text key={platform.name}>{platform.name}</Text>
          ))}
          <Heading size="lg">{game.name}</Heading>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
