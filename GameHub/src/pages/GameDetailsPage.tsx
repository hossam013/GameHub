import { Box, Heading, Spinner, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";

const GameDetailsPage = () => {
  const { data: game, isLoading, error } = useGame();

  if (isLoading) return <Spinner />;
  if (error) throw error;
  return (
    <Box padding={5}>
      <Heading>{game?.name}</Heading>
      <Text>{game?.description_raw}</Text>
    </Box>
  );
};

export default GameDetailsPage;
