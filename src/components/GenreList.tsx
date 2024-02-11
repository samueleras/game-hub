import { Button, Flex, Heading, Image, Spinner } from "@chakra-ui/react";
import useGameQueryStore from "../gamequery/store";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data: genres, error, isLoading } = useGenres();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

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
            onClick={() => setSelectedGenreId(genre.id)}
          >
            {genre.name}
          </Button>
        </Flex>
      ))}
    </>
  );
};

export default GenreList;
