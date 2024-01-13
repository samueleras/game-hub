import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
} from "@chakra-ui/react";
import usePlatforms, { Platform } from "../hooks/useParentPlatforms";
import { ChevronDownIcon } from "@chakra-ui/icons";

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
        {platforms.map((platform) => {
          return (
            <MenuItem
              key={platform.id}
              value={platform.id}
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
