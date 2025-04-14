//Task 2 - Fetch and render tour list with useEffect and state
import React, { useEffect, useState } from 'react'; //Importing tools from React: useState to manage value
import TourCard from './TourCard'; //Importing the TourCard component

// GalleryList is responsible for fetching tours and rendering the list
const Gallery = ({ tours, setTours, onRemove }) => {
  // Local state to manage loading and errors
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Function to fetch gallery from the API
  const fetchTours = async () => {
    try {
      const res = await fetch("https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project");
      const data = await res.json();

      // You don't need `.results` for this API, just `data`
      const trimmed = data.map((tour) => ({
        id: tour.id,
        name: tour.name,
        info: tour.info,
        price: tour.price,
        image: tour.image,
      }));

      setTours(trimmed);// Save data to global state
      setLoading(false);// Set loading to false
    } catch (error) {
      setError(true);// If fetch fails, show error
      setLoading(false);// Set loading to false
    }
  };

  // Run fetchTours once after the component mounts
  useEffect(() => {
    fetchTours();
  }, []);

  // Render loading state
  if (loading) {
    return <h2>Loading...</h2>;
  }

  // Render error state
  if (error) {
    return <h2>Error fetching tours...</h2>;
  }

  // Render if no tours remain
  if (tours.length === 0) {
    return (
      <div>
        <h2>No tours left</h2>
        <button onClick={fetchTours}>Refresh</button>
      </div>
    );
  }

  // Render the list of TourCards
  return (
    <section className="gallery">
      {tours.map((tour) => (
        <TourCard
          key={tour.id}
          {...tour} // Spread operator to pass all tour properties
          onRemove={onRemove} // Pass the remove function
        />
      ))}
    </section>
  );
};

export default Gallery; //Exporting the Gallery component so it can be used in other files like App.jsx

