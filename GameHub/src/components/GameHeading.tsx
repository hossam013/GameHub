import { Heading } from "@chakra-ui/react";
import { GameQuary } from "../App";

interface Props {
  gameQuery: GameQuary;
}

const GameHeading = ({ gameQuery }: Props) => {
  return (
    <Heading as="h1" fontSize="5xl" marginTop={5}>
      {gameQuery.platform?.name} {gameQuery.genre?.name} Games
    </Heading>
  );
};

export default GameHeading;
