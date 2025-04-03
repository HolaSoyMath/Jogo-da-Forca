import api from "./api"

export const getRankingTop10 = async () => {
  const response = await api.get('/result');
  return response.data
}