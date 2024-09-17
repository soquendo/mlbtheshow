import axios from 'axios';

const baseURL = 'https://api.mlbtheshow.com';

export const fetchItems = async () => {
  try {
    const response = await axios.get(`${baseURL}/apis/items.json`, {
      params: {
        type: 'mlb_card', // or 'equipment', 'stadium', etc., depending on your app's needs
        page: 1
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching items:', error);
    return { items: [] }; // Return an empty array on error
  }
};