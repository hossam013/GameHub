import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenShots from "../hooks/useScreenShots";

interface Props {
  gameId: number;
}

const GameScreenShots = ({ gameId }: Props) => {
  const { data: screenShots } = useScreenShots(gameId);

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2} marginTop={3}>
      {screenShots?.results.map((s) => (
        <Image key={s.id} src={s.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenShots;
