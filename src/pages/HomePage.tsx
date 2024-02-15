import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import GenreSelector from "../components/GenreSelector";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

function App() {
  return (
    <Grid
      templateAreas={{
        base: ` "main"`,
        lg: `"aside main"`,
      }}
      gridTemplateColumns={{
        base: `1fr`,
        lg: `12rem 1fr`,
      }}
      h="100vh"
      fontWeight="bold"
    >
      <GridItem
        area={"aside"}
        display={{ base: "none", lg: "block" }}
        paddingX={2}
        paddingTop={3}
      >
        <GenreList />
      </GridItem>
      <GridItem area={"main"} paddingTop={3}>
        <Box paddingLeft={{ base: 1, md: 2, xl: 5 }}>
          <GameHeading />
          <Flex gap="0.5rem" marginBottom={3} flexWrap="wrap">
            <PlatformSelector />
            <SortSelector />
            <Box display={{ base: "block", lg: "none" }}>
              <GenreSelector />
            </Box>
          </Flex>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
