import useGenres, { Genre } from "../hooks/useGenres";
import { Image, Flex, Button, Spinner } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { genres, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner size="lg" marginTop={3} />;

  return (
    <>
      {genres.map((genre) => (
        <Flex key={genre.id} alignItems={"center"} gap={3} marginTop={3}>
          <Image
            boxSize="32px"
            borderRadius="0.5rem"
            objectFit="cover"
            src={getCroppedImageUrl(genre.image_background)}
            alt={genre.name}
          />
          <Button
            fontSize="lg"
            variant="link"
            whiteSpace="normal"
            textAlign="left"
            onClick={() => onSelectGenre(genre)}
          >
            {genre.name}
          </Button>
        </Flex>
      ))}
    </>
  );
};

export default GenreList;
