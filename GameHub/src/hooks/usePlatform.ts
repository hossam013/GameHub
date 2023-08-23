import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  image: string;
}

const usePlatform = () => useData<Platform>("/platforms/lists/parents");

export default usePlatform;
