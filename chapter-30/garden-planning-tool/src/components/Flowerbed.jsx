import SelectedPlant from './SelectedPlant';

const Flowerbed = props => {
  const plantsJSX = props.selectedPlants.map(plant => {
    return <SelectedPlant key={plant.id} plant={plant} />;
  });

  return (
    <div className="flowerbed">
      <div>
        <h4>My Flowerbed</h4>
      </div>
      {props.selectedPlants.length ? (
        <div className="plant-grid">{plantsJSX}</div>
      ) : (
        <p>Select a plant to get started!</p>
      )}
    </div>
  );
};

export default Flowerbed;
