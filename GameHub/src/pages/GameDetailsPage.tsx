import { Box, Heading, Spinner, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import { useParams } from "react-router-dom";

const GameDetailsPage = () => {
  const { slug } = useParams();

  const { data: game, isLoading, error } = useGame(slug!);

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
