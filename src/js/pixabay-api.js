import axios from 'axios';
const API_KEY = "46831660-d1aa08367accf9e9e1755dc5b";
 
const BASE_URL = "https://pixabay.com/api/";

export async function fetchImages(query, page = 1) {
    try {
        const response = await axios.get(`${BASE_URL}`, {
            params: {
                key: API_KEY,
                q: query,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: true,
                page,
                per_page: 15,
            },
        });

        if (response.data.hits.length === 0) {
            throw new Error("No images found");
        }
        
        return response.data;
    } catch (error) {
        console.error("Error fetching images:", error);
        throw error;
    }
}



     