import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import GenreList from "../components/GenreList";
import GameHeading from "../components/GameHeading";
import GameGrid from "../components/GameGrid";
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
      p="0.5rem"
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
          <Flex gap="0.5rem" marginBottom={3}>
            <PlatformSelector />
            <SortSelector />
          </Flex>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
