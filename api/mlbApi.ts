import axios from 'axios';

// Function to fetch listings from the MLB The Show API
const fetchListings = async ({
  type = 'mlb_card',
  page = 1,
  sort = 'rank',
  order = 'desc',
  rarity,
  name,
  min_best_sell_price,
  max_best_sell_price,
  min_best_buy_price,
  max_best_buy_price,
  min_rank,
  max_rank,
  display_position,
  team,
  set,
  series_id,
  brand_id,
  slot_type_id
}) => {
  try {
    const response = await axios.get('https://mlb24.theshow.com/apis/listings.json', {
      params: {
        type,
        page,
        sort,
        order,
        rarity,
        name,
        min_best_sell_price,
        max_best_sell_price,
        min_best_buy_price,
        max_best_buy_price,
        min_rank,
        max_rank,
        display_position,
        team,
        set,
        series_id,
        brand_id,
        slot_type_id
      }
    });
    return response.data; // Assuming the API returns data directly
  } catch (error) {
    console.error('Failed to fetch listings:', error);
    return null; // Handle error appropriately
  }
};

export default fetchListings;