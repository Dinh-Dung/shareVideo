import axios from 'axios';
export async function followUser(me, tiktoker) {
    try {
        const { data, error } = await axios.post(`http://localhost:8080/follow/followUser`, { me, tiktoker });

        if (!data || error) throw new Error();

        return data.data;
    } catch (error) {
        return [];
    }
}
export async function unfollowUser(me, tiktoker) {
    try {
        const { data, error } = await axios.post(`http://localhost:8080/follow/unFollow`, { me, tiktoker });

        if (!data || error) throw new Error();

        return data.data;
    } catch (error) {
        return [];
    }
}
