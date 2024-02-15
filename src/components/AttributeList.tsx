import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  heading: String;
  children: ReactNode | ReactNode[];
}

const AttributeList = ({ heading, children }: Props) => {
  return (
    <>
      <Box marginY={5}>
        <Heading color="gray.600" size="md">
          {heading}
        </Heading>
        {children}
      </Box>
    </>
  );
};

export default AttributeList;
