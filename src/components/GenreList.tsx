import { Button, Flex, Heading, Image, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genreId: number) => void;
  selectedGenreId?: number;
}

const GenreList = ({ onSelectGenre, selectedGenreId }: Props) => {
  const { data: genres, error, isLoading } = useGenres();

  if (error) return <p>{error.message}</p>;
  if (isLoading) return <Spinner size="lg" marginTop={3} />;

  return (
    <>
      <Heading as="h2" size="lg">
        Genres
      </Heading>
      {genres?.results.map((genre) => (
        <Flex
          key={genre.id}
          alignItems={"center"}
          gap={3}
          marginTop={3}
          borderRadius="0.5rem"
        >
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
            textDecoration={selectedGenreId === genre.id ? "underline" : "none"}
            fontWeight={selectedGenreId === genre.id ? "bold" : "normal"}
            onClick={() => onSelectGenre(genre.id)}
          >
            {genre.name}
          </Button>
        </Flex>
      ))}
    </>
  );
};

export default GenreList;
