import useGenres from "./useGenres";

const useGenre = (id?: number) => {
  // if (useType === "plstform") {
  //   const { data } = usePlatforms();
  //   chosenData = data;
  // }
  const { data } = useGenres();

  return data?.results.find((g) => g.id === id);
};

export default useGenre;
