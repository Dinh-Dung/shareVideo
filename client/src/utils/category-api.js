import axios from 'axios'

async function getCategoryList() {
    try {
        const { data, error } = await axios.get("http://localhost:8080/category/getList")

        if (!data || error) throw new Error()

        return data.data
    } catch (error) {
        return []
    }
}

export {
    getCategoryList
}