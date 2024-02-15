import { AspectRatio, Box, Flex, Image } from "@chakra-ui/react";
import logo from "../assets/logo.jpg";
import DarkModeSwitch from "./DarkModeSwitch";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <Flex gap="1rem" flexShrink={0} alignItems="center" padding="0.5rem">
      <Link to="/">
        <Box w="3rem" flexShrink={0}>
          <AspectRatio h="100%" ratio={1}>
            <Image
              borderRadius="0.7rem"
              objectFit="cover"
              src={logo}
              alt="Logo"
            />
          </AspectRatio>
        </Box>
      </Link>
      <SearchBar />
      <DarkModeSwitch />
    </Flex>
  );
};

export default NavigationBar;
