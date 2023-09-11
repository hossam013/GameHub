import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      borderRadius={15}
      overflow="hidden"
      _hover={{
        transform: "scale(1.04)",
        transition: "transform .15s ease-in",
      }}
      boxShadow="xl"
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
