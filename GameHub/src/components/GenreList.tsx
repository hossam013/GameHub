import { Button, HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../utils/optimizeImage";
import GenreSkeleton from "./GenreSkeleton";
import GenreCardContainer from "./GenreCardContainer";

interface Props {
  onSelectGenre: (selectedGenre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data: genres, error, isLoading } = useGenres();

  const skeletons = Array.from(Array(15).keys());

  return (
    <>
      {error && <Text>{error}</Text>}
      <List>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GenreCardContainer key={skeleton}>
              <GenreSkeleton />
            </GenreCardContainer>
          ))}
        {genres.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize="32px"
                borderRadius={8}
              />
              <Button
                fontSize="lg"
                variant="link"
                onClick={() => onSelectGenre(genre)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
