import { SearchIcon } from "@chakra-ui/icons";
import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { useRef } from "react";

interface Props {
  onSearch: (searchTerm: string) => void;
}

const SearchBar = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup height={"100%"}>
        <InputLeftElement pointerEvents="none" h="100%">
          <SearchIcon color="gray.100" boxSize={5} />
        </InputLeftElement>
        <Input
          ref={ref}
          flex="1"
          height={"100%"}
          variant="filled"
          borderRadius="2rem"
          border="none"
          type="text"
          placeholder="Search games..."
        />
      </InputGroup>
    </form>
  );
};

export default SearchBar;
