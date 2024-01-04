import { FormControl, FormLabel, Switch } from "@chakra-ui/react";

const ToggleDarkMode = () => {
  return (
    <FormControl display="flex" alignItems="center" h="100%" gap="1rem" w="">
      <Switch id="darkmode" colorScheme="green" defaultChecked />
      <FormLabel
        htmlFor="darkmode"
        mb="0"
        whiteSpace={"nowrap"}
        color="gray.100"
      >
        Dark Mode
      </FormLabel>
    </FormControl>
  );
};

export default ToggleDarkMode;
