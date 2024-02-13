import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import useGameQueryStore from "../gamequery/store";

const SearchBar = () => {
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      style={{ height: "100%" }}
      onSubmit={(event) => {
        event.preventDefault();
        if (!ref.current?.value) {
          //Sets undefined if null or empty String
          setSearchText(undefined);
        } else {
          setSearchText(ref.current.value);
        }
      }}
    >
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.100" boxSize={5} />
        </InputLeftElement>
        <Input
          ref={ref}
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
