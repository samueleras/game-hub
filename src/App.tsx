import { Grid, GridItem } from "@chakra-ui/react";
import NavigationBar from "./components/NavigationBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
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
        <GenreList />
      </GridItem>
      <GridItem area={"main"} paddingTop={3}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
