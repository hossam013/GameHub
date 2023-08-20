import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../utils/optimizeImage";

const GenreList = () => {
  const { data: genres, error } = useGenres();
  return (
    <>
      {error && <Text>{error}</Text>}
      <List>
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
