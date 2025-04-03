import api from "./api"

export const getRankingTop10 = async () => {
  try {
    const response = await api.get('/result');
    return response.data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return error.response || { error: "Resultados não encontrados", status: 500 };
  }
}