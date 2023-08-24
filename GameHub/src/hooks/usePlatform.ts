// import useData from "./useData";
import platforms from "../data/platforms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  image: string;
}

// const usePlatform = () => useData<Platform>("/platforms/lists/parents");
const usePlatform = () => ({ data: platforms, error: null, isLoading: false });

export default usePlatform;
