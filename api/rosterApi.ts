import axios from 'axios';

const baseURL = 'https://api.mlbtheshow.com';

export const fetchRosters = async () => {
  try {
    const response = await axios.get(`${baseURL}/apis/roster_updates.json`, {
      params: {
        page: 1
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching rosters:', error);
    return { rosters: [] }; // Return an empty array on error
  }
};