import axios from 'axios';

const baseURL = 'https://api.mlbtheshow.com';

export const fetchPerformance = async () => {
  try {
    const response = await axios.get(`${baseURL}/apis/performance.json`, {
      params: {
        id: 1 // Example param, modify based on actual API requirements
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching performance data:', error);
    return { performance: [] }; // Return an empty array on error
  }
};