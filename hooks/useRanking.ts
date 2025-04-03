import { getRanking } from "@/services/getRanking";

export async function getRankingTop10() {
  const response = await getRanking();
  return response
}