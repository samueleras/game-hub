import {
  AspectRatio,
  Box,
  Flex,
  Input,
  Image,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import ToggleDarkMode from "./ToggleDarkMode";

const NavigationBar = () => {
  return (
    <Flex gap="1rem" flexShrink={0} w="100%" h="100%">
      <Box w="3rem" flexShrink={0}>
        <AspectRatio h="100%" ratio={1}>
          <Image
            borderRadius="0.7rem"
            boxSize="100%"
            objectFit="cover"
            src="../../public/images/logo.jpg"
            alt="Dan Abramov"
          />
        </AspectRatio>
      </Box>
      <InputGroup>
        <InputLeftElement pointerEvents="none" h="100%">
          <SearchIcon color="gray.100" boxSize={5} />
        </InputLeftElement>
        <Input
          h="100%"
          flex="1"
          bg="gray.500"
          borderRadius="2rem"
          border="none"
          type="text"
          placeholder="Search games..."
          _placeholder={{ color: "gray.100" }}
        />
      </InputGroup>
      <ToggleDarkMode />
    </Flex>
  );
};

export default NavigationBar;
