import { Grid, GridItem } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"header" "main"`,
        lg: `"header header" "nav main"`,
      }}
      gridTemplateRows={"3rem 1fr"}
      gridTemplateColumns={{
        base: `1fr`,
        lg: `14rem 1fr`,
      }}
      h="100vh"
      gap="1"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem pl="2" bg="orange.300" area={"header"}>
        Header
      </GridItem>
      <GridItem
        pl="2"
        bg="pink.300"
        area={"nav"}
        display={{ base: "none", lg: "block" }}
      >
        Nav
      </GridItem>
      <GridItem pl="2" bg="green.300" area={"main"}>
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
