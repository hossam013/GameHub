import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import { APIClient } from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
  // games_count: number;
  // image_background: string;
  // // image: string;
}

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatform = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { results: platforms, count: platforms.length },
  });
};

export default usePlatform;
