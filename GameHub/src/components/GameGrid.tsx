import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  const cardWidth = "300px";

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        padding={10}
      >
        {games.map((g) => (
          <GameCard key={g.id} game={g} cardWidth={cardWidth} />
        ))}
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardSkeleton key={skeleton} cardWidth={cardWidth} />
          ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
