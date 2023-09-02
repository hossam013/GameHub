import { Heading } from "@chakra-ui/react";
import { GameQuary } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatform from "../hooks/usePlatform";

interface Props {
  gameQuery: GameQuary;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const genre = genres.results.find((g) => g.id === gameQuery.genreId);

  const { data: platforms } = usePlatform();
  const selectedPlatform = platforms.results.find(
    (p) => p.id === gameQuery.platformId
  );
  return (
    <Heading
      as="h1"
      marginTop={3}
      fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
    >
      {selectedPlatform?.name} {genre?.name} Games
    </Heading>
  );
};

export default GameHeading;
