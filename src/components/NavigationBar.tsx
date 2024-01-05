import { AspectRatio, Box, Flex, Image } from "@chakra-ui/react";
import SearchBar from "./SearchBar";
import logo from "../assets/logo.jpg";
import DarkModeSwitch from "./DarkModeSwitch";

const NavigationBar = () => {
  return (
    <Flex gap="1rem" flexShrink={0} w="100%" h="100%">
      <Box w="3rem" flexShrink={0}>
        <AspectRatio h="100%" ratio={1}>
          <Image
            borderRadius="0.7rem"
            boxSize="100%"
            objectFit="cover"
            src={logo}
            alt="Dan Abramov"
          />
        </AspectRatio>
      </Box>
      <SearchBar />
      <DarkModeSwitch />
    </Flex>
  );
};

export default NavigationBar;
