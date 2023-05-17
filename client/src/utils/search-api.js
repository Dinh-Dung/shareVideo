import axios from 'axios';
export async function searchUser(query, type = 'less') {
    try {
        const { data, error } = await axios.get(`http://localhost:8080/search/users`, {
            params: {
                query,
                type,
            },
        });
        if (!data || error) throw new Error();

        return data.data;
    } catch (error) {
        return [];
    }
}
