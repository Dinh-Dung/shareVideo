import axios from 'axios';
export async function getComment(id) {
    try {
        const { data, error } = await axios.get(`http://localhost:8080/comment/getCommentVideo/${id}`);

        if (!data || error) throw new Error();

        return data.data;
    } catch (error) {
        return [];
    }
}
