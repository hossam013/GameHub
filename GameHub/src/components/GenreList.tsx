import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../utils/optimizeImage";
import GenreSkeleton from "./GenreSkeleton";
import GenreCardContainer from "./GenreCardContainer";

const GenreList = () => {
  const { data: genres, error, isLoading } = useGenres();

  const skeletons = Array.from(Array(15).keys());

  return (
    <>
      {error && <Text>{error}</Text>}
      <List>
        {isLoading &&
          skeletons.map((s) => (
            <GenreCardContainer key={s}>
              <GenreSkeleton />
            </GenreCardContainer>
          ))}
        {genres.map((g) => (
          <ListItem key={g.id} paddingY="5px">
            <HStack>
              <Image
                src={getCroppedImageUrl(g.image_background)}
                boxSize="32px"
                borderRadius={8}
              />
              <Text fontSize="lg">{g.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
