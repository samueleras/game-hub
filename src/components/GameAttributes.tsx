import { SimpleGrid, Text } from "@chakra-ui/react";
import { Game } from "../entities/Game";
import AttributeList from "./AttributeList";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  const attributes = [
    {
      heading: "Platforms",
      items: game.parent_platforms.map(({ platform }) => (
        <Text key={platform.id}>{platform.name}</Text>
      )),
    },
    { heading: "Metascore", items: <CriticScore score={game.metacritic} /> },
    {
      heading: "Genres",
      items: game.genres.map((genre) => (
        <Text key={genre.id}>{genre.name}</Text>
      )),
    },
    {
      heading: "Publishers",
      items: game.publishers.map((publisher) => (
        <Text key={publisher.id}>{publisher.name}</Text>
      )),
    },
  ];

  return (
    <SimpleGrid columns={2}>
      {attributes.map((attr) => (
        <AttributeList heading={attr.heading} key={attr.heading}>
          {attr.items}
        </AttributeList>
      ))}
    </SimpleGrid>
  );
};

export default GameAttributes;
