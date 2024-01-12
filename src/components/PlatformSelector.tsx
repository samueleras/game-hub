import { Select } from "@chakra-ui/react";
import usePlatforms, { Platform } from "../hooks/useParentPlatforms";

interface Props {
  onSelectPlatform: (platform: Platform | null) => void;
}

const PlatformSelector = ({ onSelectPlatform }: Props) => {
  const { platforms, error } = usePlatforms();

  if (error) return null;
  return (
    <Select
      placeholder="Platforms"
      width="12rem"
      onChange={(event) =>
        onSelectPlatform(
          platforms.find(
            (platform) => platform.id === parseInt(event.target.value)
          ) || null
        )
      }
    >
      {platforms.map((platform) => {
        return (
          <option key={platform.id} value={platform.id}>
            {platform.name}
          </option>
        );
      })}
    </Select>
  );
};

export default PlatformSelector;
