import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GenreCardContainer = ({ children }: Props) => {
  return (
    <Box
      height="40px"
      width="150px"
      borderRadius={15}
      overflow="hidden"
      marginY="5px"
    >
      {children}
    </Box>
  );
};

export default GenreCardContainer;
