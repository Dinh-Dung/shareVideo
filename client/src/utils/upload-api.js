import axios from 'axios';

export async function uploadVideoToCloud(formData) {
    try {
        const { data } = await axios.post(`http://localhost:8080/video/upload`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        return data;
    } catch (error) {
        return null;
    }
}

export async function getVideoList() {
    try {
        const { data, error } = await axios.get('http://localhost:8080/video/getList');

        if (!data || error) throw new Error();

        return data.data;
    } catch (error) {
        return [];
    }
}
export async function getUserVideoList(id) {
    try {
        const { data, error } = await axios.get(`http://localhost:8080/video/getUserVideoList/${id}`);

        if (!data || error) throw new Error();

        return data.data;
    } catch (error) {
        return [];
    }
}
