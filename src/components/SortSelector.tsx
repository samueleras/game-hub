import { ChevronDownIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";

interface Props {
  onSelectOrder: (sortOrder: string) => void;
  selectedOrder: string;
}

const SortSelector = ({ onSelectOrder, selectedOrder }: Props) => {
  const sortOrders = [
    { name: "Relevance", value: "" },
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
          (sortOrders.find((item) => item.value === selectedOrder)?.name ||
            "Relevance")}
      </MenuButton>
      <MenuList>
        {sortOrders.map((sortOrder) => {
          return (
            <MenuItem
              key={sortOrder.value}
              onClick={() => onSelectOrder(sortOrder.value)}
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
