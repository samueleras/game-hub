import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import usePlatforms from "../hooks/useParentPlatforms";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Platform } from "../hooks/useGames";

interface Props {
  onSelectPlatform: (platform: Platform | null) => void;
}

const PlatformSelector = ({ onSelectPlatform }: Props) => {
  const { platforms, error } = usePlatforms();

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Platforms
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => onSelectPlatform(null)}>Any Platform</MenuItem>
        {platforms.map((platform) => {
          return (
            <MenuItem
              key={platform.id}
              onClick={() => onSelectPlatform(platform)}
            >
              {platform.name}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
