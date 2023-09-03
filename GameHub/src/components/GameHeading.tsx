import { Heading } from "@chakra-ui/react";
import { GameQuary } from "../App";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";

interface Props {
  gameQuery: GameQuary;
}

const GameHeading = ({ gameQuery }: Props) => {
  const genre = useGenre(gameQuery.genreId);
  const platform = usePlatform(gameQuery.platformId);

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
