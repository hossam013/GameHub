import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../gameQuaryStore";

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenre(genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatform(platformId);

  return (
    <Heading
      as="h1"
      marginTop={3}
      fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
    >
      {platform?.name} {genre?.name} Games
    </Heading>
  );
};

export default GameHeading;
