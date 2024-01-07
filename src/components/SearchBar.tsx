import { SearchIcon } from "@chakra-ui/icons";
import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";

const SearchBar = () => {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none" h="100%">
        <SearchIcon color="gray.100" boxSize={5} />
      </InputLeftElement>
      <Input
        id="search"
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
  );
};

export default SearchBar;
