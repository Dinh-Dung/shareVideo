import axios from "axios";

export async function uploadVideoToCloud(formData) {
    try {
        const { data } = await axios.post(`http://localhost:8080/video/upload`,
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }
        )

        return data
    } catch (error) {
        return null
    }
}