import { useState, useEffect } from 'react';
import AvailablePlant from './AvailablePlant';
import Flowerbed from './Flowerbed';
import { alphabetize } from '../shared/utils';

const Main = () => {
  // This state variable will be updated when data is fetched
  // and also later if plants are allocated/returned
  const [allPlants, setAllPlants] = useState([]);

  // This state variable will allow us to render the page
  // only after fetched data is available
  const [loading, setLoading] = useState(true);

  const fetchPlants = async () => {
    let response = await fetch(
      'https://docs.google.com/document/d/1DjGYPISRGCsP4zHwJYBtciqbKAvae1CZ9EKsci4mTJk/export?format=txt'
    );
    let data = await response.json();

    let plantData = data.map(obj => {
      return { ...obj, numAllocated: 0 };
    });

    alphabetize(plantData, 'name');

    setAllPlants(plantData);
  };

  // Runs once when component first loads
  useEffect(() => {
    fetchPlants();
  }, []);

  // Runs only if the state variable allPlants is updated
  useEffect(() => {
    if (allPlants.length > 0) {
      setLoading(false);
    }
  }, [allPlants]);

  const handleReturn = thePlant => {
    if (thePlant.numAllocated > 0) {
      // Create a new array with same objects except the one that is being updated
      let updatedPlants = allPlants.map(aPlant => {
        return aPlant.id !== thePlant.id
          ? aPlant
          : {
              ...aPlant,
              numAvailable: aPlant.numAvailable + 1,
              numAllocated: aPlant.numAllocated - 1,
            };
      });
      setAllPlants(updatedPlants);
    }
  };

  const handleAllocate = thePlant => {
    if (thePlant.numAvailable > 0) {
      // Create a new array with same objects except the one that is being updated
      let updatedPlants = allPlants.map(aPlant => {
        return aPlant.id !== thePlant.id
          ? aPlant
          : {
              ...aPlant,
              numAvailable: aPlant.numAvailable - 1,
              numAllocated: aPlant.numAllocated + 1,
            };
      });
      setAllPlants(updatedPlants);
    }
  };

  let availablePlantsJSX = allPlants.map(plant => {
    return (
      <AvailablePlant
        key={plant.id}
        plant={plant}
        returnPlant={handleReturn}
        allocatePlant={handleAllocate}
      />
    );
  });

  return (
    !loading && (
      <main>
        <div id="left-column">
          <h3>Available Plants</h3>
          {availablePlantsJSX}
        </div>

        <div id="right-column">
          <Flowerbed
            selectedPlants={allPlants.filter(plant => plant.numAllocated > 0)}
          />
        </div>
      </main>
    )
  );
};

export default Main;
