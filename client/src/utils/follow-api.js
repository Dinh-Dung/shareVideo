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

export async function checkUserFollowed(me, tiktoker) {
    try {
        const { data, error } = await axios.post(`http://localhost:8080/follow/getActiveFollow`, { me, tiktoker });

        if (!data || error) throw new Error();

        return data.data;
    } catch (error) {
        return [];
    }
}
export async function getFollowerOfUser(id) {
    try {
        const { data, error } = await axios.get(`http://localhost:8080/follow/getFollowerOfUser/${id}`);

        if (!data || error) throw new Error();

        return data.data;
    } catch (error) {
        return [];
    }
}
