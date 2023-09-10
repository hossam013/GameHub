import { Spinner } from "@chakra-ui/react";
import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTralier = ({ gameId }: Props) => {
  const { data: trailers, error, isLoading } = useTrailers(gameId);
  const firstTrailer = trailers?.results[0];

  if (isLoading) return <Spinner />;
  if (error) throw error;
  return firstTrailer ? (
    <video
      src={firstTrailer.data[480]}
      poster={firstTrailer.preview}
      controls
    />
  ) : null;
};

export default GameTralier;
