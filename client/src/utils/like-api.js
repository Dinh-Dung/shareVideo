import axios from 'axios';
export async function likeCountOfVideo(id) {
    try {
        const { data, error } = await axios.get(`http://localhost:8080/like/getLikeCount/${id}`);

        if (!data || error) throw new Error();

        return data.data;
    } catch (error) {
        return [];
    }
}
export async function likeVideo(videoId, userId) {
    try {
        const { data, error } = await axios.post(`http://localhost:8080/like/likeVideo`, { userId, videoId });

        if (!data || error) throw new Error();

        return data.data;
    } catch (error) {
        return [];
    }
}
export async function unlikeVideo(videoId, userId) {
    try {
        const { data, error } = await axios.post(`http://localhost:8080/like/unlike`, { userId, videoId });

        if (!data || error) throw new Error();

        return data.data;
    } catch (error) {
        return [];
    }
}
