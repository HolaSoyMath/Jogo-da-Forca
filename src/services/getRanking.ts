import api from "./api"

export const getRanking = async () => {
  const response = await api.get('/result');
  return response.data
}