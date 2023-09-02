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
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../utils/optimizeImage";
import GenreSkeleton from "./GenreSkeleton";
import GenreCardContainer from "./GenreCardContainer";
import theme from "../Theme";

interface Props {
  onSelectGenre: (selectedGenre: Genre) => void;
  selectedGenreId?: number;
}

const GenreList = ({ onSelectGenre, selectedGenreId }: Props) => {
  const { data: genres, error, isLoading } = useGenres();

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
                onClick={() => onSelectGenre(genre)}
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                color={colorMode === "light" ? "blackAlpha.900" : ""}
              >
                <Text
                  color={theme.config.initialColorMode === "dark" ? "" : ""}
                >
                  {genre.name.length < 12
                    ? genre.name
                    : genre.id !== selectedGenreId
                    ? genre.name.slice(0, 15) + ".."
                    : genre.name}
                </Text>
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default GenreList;
