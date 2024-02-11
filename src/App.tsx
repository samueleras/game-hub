import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import NavigationBar from "./components/NavigationBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
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
