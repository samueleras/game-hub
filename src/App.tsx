import { Grid, GridItem } from "@chakra-ui/react";
import NavigationBar from "./components/NavigationBar";

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
        lg: `14rem 1fr`,
      }}
      h="100vh"
      color="blackAlpha.700"
      fontWeight="bold"
      p="0.5rem"
      bg="blackAlpha.900"
    >
      <GridItem area={"nav"}>
        <NavigationBar />
      </GridItem>
      <GridItem area={"aside"} display={{ base: "none", lg: "block" }}>
        Aside
      </GridItem>
      <GridItem pl="2" area={"main"}>
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
