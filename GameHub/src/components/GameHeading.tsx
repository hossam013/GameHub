import { Heading } from "@chakra-ui/react";
import { GameQuary } from "../App";

interface Props {
  gameQuery: GameQuary;
}

const GameHeading = ({ gameQuery }: Props) => {
  return (
    <Heading
      as="h1"
      marginTop={3}
      fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
    >
      {gameQuery.platform?.name} {gameQuery.genre?.name} Games
    </Heading>
  );
};

export default GameHeading;
