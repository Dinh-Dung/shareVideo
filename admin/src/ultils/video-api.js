import axios from "axios";
export async function getPendingVideos() {
  try {
    const { data, error } = await axios.get(
      `http://localhost:8080/admin/getPendingVideos`
    );

    if (!data || error) throw new Error();

    return data.data;
  } catch (error) {
    return [];
  }
}
