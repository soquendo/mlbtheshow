import React, { useState, useEffect } from 'react';
import fetchListings from '../api/mlbApi'; // Adjust the import path as necessary

const ListingsComponent = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const loadListings = async () => {
      const data = await fetchListings({ type: 'stadium' }); // Example usage
      if (data) {
        setListings(data.listings);
      }
    };

    loadListings();
  }, []);

  return (
    <div>
      {listings.length > 0 ? (
        <ul>
          {listings.map(listing => (
            <li key={listing.item.uuid}>{listing.item.name} - {listing.best_sell_price}</li>
          ))}
        </ul>
      ) : (
        <p>No listings found.</p>
      )}
    </div>
  );
};

export default ListingsComponent;