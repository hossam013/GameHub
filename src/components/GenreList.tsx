import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import theme from "../Theme";
import useGameQueryStore from "../gameQuaryStore";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../utils/optimizeImage";
import GenreCardContainer from "./GenreCardContainer";
import GenreSkeleton from "./GenreSkeleton";

const GenreList = () => {
  const { data: genres, error, isLoading } = useGenres();

  const setGenreId = useGameQueryStore((s) => s.setGenreId);

  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);

  const skeletons = Array.from(Array(15).keys());

  const { colorMode } = useColorMode();

  if (error) return null;
  return (
    <Box marginTop={5}>
      <Heading fontSize="2xl" marginBottom={2}>
        Genres
      </Heading>
      <List>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GenreCardContainer key={skeleton}>
              <GenreSkeleton />
            </GenreCardContainer>
          ))}
        {genres?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <Box boxShadow={genre.id === genreId ? "lg" : ""} rounded={10}>
              <HStack>
                <Image
                  src={getCroppedImageUrl(genre.image_background)}
                  boxSize="32px"
                  borderRadius={8}
                  objectFit="cover"
                />
                <Button
                  whiteSpace="normal"
                  textAlign="left"
                  fontSize="md"
                  variant="link"
                  onClick={() => setGenreId(genre.id)}
                  fontWeight={genre.id === genreId ? "bold" : "normal"}
                  color={colorMode === "light" ? "blackAlpha.900" : ""}
                >
                  <Text
                    color={theme.config.initialColorMode === "dark" ? "" : ""}
                  >
                    {genre.name.length < 12
                      ? genre.name
                      : genre.id !== genreId
                      ? genre.name.slice(0, 15) + ".."
                      : genre.name}
                  </Text>
                </Button>
              </HStack>
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default GenreList;
