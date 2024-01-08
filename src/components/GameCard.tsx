import { Card, CardBody, Stack, Heading, Image, Flex } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card maxW="100%" overflow={"hidden"}>
      <Image src={getCroppedImageUrl(game.background_image)} alt={game.name} />
      <CardBody>
        <Stack mt="0" spacing="3">
          <Flex justifyContent={"space-between"} alignItems={"center"}>
            <PlatformIconList
              platforms={game.parent_platforms.map(
                (platform) => platform.platform
              )}
            />
            <CriticScore score={game.metacritic} />
          </Flex>
          <Heading size="lg">{game.name}</Heading>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
