import axios from 'axios';
export async function getVideoAndCommentById(id) {
    try {
        const { data, error } = await axios.get(`http://localhost:8080/video/getVideoAndCommentById/${id}`);

        if (!data || error) throw new Error();

        return data.data;
    } catch (error) {
        return [];
    }
}
export async function getVideoToday() {
    try {
        const { data, error } = await axios.get(`http://localhost:8080/video/getVideoToday`);

        if (!data || error) throw new Error();

        return data.data;
    } catch (error) {
        return [];
    }
}
export async function getPrivateVideos(id) {
    try {
        const { data, error } = await axios.get(`http://localhost:8080/video/getPrivateVideos/${id}`);

        if (!data || error) throw new Error();

        return data.data;
    } catch (error) {
        return [];
    }
}
export async function getVideoFollower(id) {
    try {
        const { data, error } = await axios.get(`http://localhost:8080/video/getVideoFollower/${id}`);

        if (!data || error) throw new Error();

        return data.data;
    } catch (error) {
        return [];
    }
}
export async function deleteVideo(videoId) {
    try {
        const { data, error } = await axios.post(`http://localhost:8080/video/deleteVideo`, { videoId });

        if (!data || error) throw new Error();

        return data.data;
    } catch (error) {
        return [];
    }
}
export async function acceptVideo(videoId) {
    try {
        const { data, error } = await axios.post(`http://localhost:8080/video/acceptVideoClient`, { videoId });

        if (!data || error) throw new Error();

        return data.data;
    } catch (error) {
        return [];
    }
}
