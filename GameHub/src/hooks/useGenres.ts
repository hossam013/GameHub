// import useData from "./useData";
import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
  games_count: number;
}

// const useGenres = () => useData<Genre>("/genres");

const useGenres = () => ({ data: genres, error: null, isLoading: false });

export default useGenres;
