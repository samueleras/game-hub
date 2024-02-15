import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
  unexpandedLength?: number;
}

const ExpandableText = ({ children, unexpandedLength = 300 }: Props) => {
  const [isExpanded, setExpanded] = useState(false);

  if (!children) return null;

  if (children.length <= unexpandedLength) return <Text>{children}</Text>;

  return (
    <Text>
      {isExpanded ? children : children.substring(0, unexpandedLength) + " ..."}
      <Button
        onClick={() => setExpanded(!isExpanded)}
        marginStart={1}
        colorScheme="gray"
        size="xs"
        fontWeight="bold"
      >
        {isExpanded ? "Show Less" : "Read More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
