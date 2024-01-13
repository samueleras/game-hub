import { Grid, GridItem } from "@chakra-ui/react";
import NavigationBar from "./components/NavigationBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
  console.log(selectedPlatform);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      gridTemplateRows={"3rem 1fr"}
      gridTemplateColumns={{
        base: `1fr`,
        lg: `12rem 1fr`,
      }}
      h="100vh"
      fontWeight="bold"
      p="0.5rem"
    >
      <GridItem area={"nav"}>
        <NavigationBar />
      </GridItem>
      <GridItem
        area={"aside"}
        display={{ base: "none", lg: "block" }}
        paddingX={2}
        paddingTop={3}
      >
        <GenreList
          onSelectGenre={setSelectedGenre}
          selectedGenre={selectedGenre}
        />
      </GridItem>
      <GridItem area={"main"} paddingTop={3}>
        <PlatformSelector onSelectPlatform={setSelectedPlatform} />
        <GameGrid
          selectedGenre={selectedGenre}
          selectedPlatform={selectedPlatform}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
