import api from "./api"

export async function saveResult(id: string, result: string) {
  const response = await api.put('/result', {id, result});
  return response.data
}