import axios from 'axios';

async function getRandomUsersSuggest() {
    try {
        const { data, error } = await axios.get('http://localhost:8080/user/randomUsersSuggest');

        if (!data || error) throw new Error();

        return data.data;
    } catch (error) {
        return [];
    }
}
async function getUserFollowers(id) {
    try {
        const { data, error } = await axios.get(`http://localhost:8080/user/getUserFollowers/${id}`);

        if (!data || error) throw new Error();

        return data.data;
    } catch (error) {
        return [];
    }
}
async function getProfileAndVideoByNickname(nickname) {
    try {
        const { data, error } = await axios.get(`http://localhost:8080/user/getProfileAndVideoByNickname/${nickname}`);

        if (!data || error) throw new Error();

        return data.data;
    } catch (error) {
        return [];
    }
}
export { getRandomUsersSuggest, getUserFollowers, getProfileAndVideoByNickname };
