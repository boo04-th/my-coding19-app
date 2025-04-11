import React, { useState } from 'react';
import Gallery from './components/Gallery';
import './styles/styles.css';

//Root componnent of the app
function App() {
  //Gobal state to hold the list of tours   
  const [tours, setTours] = useState([]);

  //Function to remove a tour
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  return (
    <main>
      <h1>Our Tours</h1>
      {/*Pass the list of tours and the removeTour function as props to Gallery component*/}
      <Gallery tours={tours} setTours={setTours} onRemove={removeTour} />
    </main>
  );
}

export default App;
// export default App