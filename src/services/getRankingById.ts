import api from "./api"

export async function getRankingById (id: string) {
  const response = await api.get(`/result/${id}`);
  return response.data
}