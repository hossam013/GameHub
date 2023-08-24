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
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
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
        {genres.map((genre) => (
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
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                color={colorMode === "light" ? "blackAlpha.900" : ""}
              >
                <Text
                  color={theme.config.initialColorMode === "dark" ? "" : ""}
                >
                  {genre.name.length < 12
                    ? genre.name
                    : genre.id !== selectedGenre?.id
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
