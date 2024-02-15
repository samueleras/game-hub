import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import useGameQueryStore from "../gamequery/store";
import useGenres from "../hooks/useGenres";

const GenreSelector = () => {
  const { data: genres, error } = useGenres();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

  if (error) throw error;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {"Genre: " +
          (genres.results.find((item) => item.id === selectedGenreId)?.name ||
            "Any")}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => setSelectedGenreId(undefined)}>Any</MenuItem>
        {genres.results.map((genre) => {
          return (
            <MenuItem
              key={genre.id}
              onClick={() => setSelectedGenreId(genre.id)}
            >
              {genre.name}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};

export default GenreSelector;
