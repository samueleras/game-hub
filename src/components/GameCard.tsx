import { Card, CardBody, Flex, Heading, Image, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Game } from "../hooks/useGames";
import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Link to={`/games/${game.slug}`}>
      <Card
        maxW="100%"
        width="100%"
        overflow={"hidden"}
        height="100%"
        _hover={{
          transform: "scale(1.03)",
          transition: "transform 0.1s ease-in",
        }}
      >
        <Image
          src={getCroppedImageUrl(game.background_image)}
          alt={game.name}
        />
        <CardBody>
          <Stack mt="0" spacing="2">
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              <PlatformIconList
                platforms={game.parent_platforms.map(
                  (platform) => platform.platform
                )}
              />
              <CriticScore score={game.metacritic} />
            </Flex>
            <Heading size="lg">{game.name}</Heading>
            <Emoji rating={game.rating_top} />
          </Stack>
        </CardBody>
      </Card>
    </Link>
  );
};

export default GameCard;
