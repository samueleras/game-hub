import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import useGameQueryStore from "../gamequery/store";

const SortSelector = () => {
  const sortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
  const setSortOrder = useGameQueryStore((s) => s.setSortOrder);
  const sortOrders = [
    { name: "Relevance", value: undefined },
    { name: "Name", value: "name" },
    { name: "Date added", value: "-added" },
    { name: "Release date", value: "-released" },
    { name: "Popularity", value: "-metacritic" },
    { name: "Average rating", value: "-rating" },
  ];

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {"Order by: " +
          (sortOrders.find((item) => item.value === sortOrder)?.name ||
            "Relevance")}
      </MenuButton>
      <MenuList>
        {sortOrders.map((sortOrder) => {
          return (
            <MenuItem
              key={sortOrder.value || "default"}
              onClick={() => setSortOrder(sortOrder.value)}
            >
              {sortOrder.name}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
