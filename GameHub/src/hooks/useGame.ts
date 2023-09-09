import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { useParams } from "react-router-dom";
import { APIClient } from "../services/api-client";
import { Game } from "./useGames";

const apiClient = new APIClient<Game>(`/games`);

const useGame = () => {
  const { slug } = useParams();

  return useQuery({
    queryKey: ["game", slug],
    queryFn: () => apiClient.get(slug!),
    staleTime: ms("24h"),
  });
};

export default useGame;
