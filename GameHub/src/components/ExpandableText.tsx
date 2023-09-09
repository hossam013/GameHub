import { Text, Button } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [isExpanded, setisExpanded] = useState(false);

  if (!children) return null;

  const gameDescription =
    children.length! > 300 ? children.slice(0, 300) + "..." : children;

  return (
    <Text>
      {isExpanded ? children : gameDescription}
      <Button
        colorScheme="yellow"
        size="xs"
        marginLeft={1}
        onClick={() => setisExpanded(!isExpanded)}
      >
        {isExpanded ? "Show less" : "Read more"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
