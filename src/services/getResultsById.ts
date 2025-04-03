import api from "./api";

export async function getResultsById(id: string) {
  try {
    const response = await api.get(`/result/${id}`);
    return response.data;
  } catch {
    return {id: id, win: 0, loss: 0};
  }
}
