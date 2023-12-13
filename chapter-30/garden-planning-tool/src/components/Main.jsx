import AvailablePlant from './AvailablePlant';
import Flowerbed from './Flowerbed';

const Main = () => {

  // Temporary test data
  let testPlants = [
    {
      id: 1,
      name: 'Hyacinth',
      color: 'blue',
      image:
        'https://drive.google.com/uc?export=view&id=1wZU8kWKcTWCIEMjz-Ce7dTU8Fcb-NM9I',
      numAvailable: 6,
      numAllocated: 2,
    },
    {
      id: 2,
      name: 'Tulip',
      color: 'red',
      image:
        'https://drive.google.com/uc?export=view&id=1Vl0Ch4MQslwh9EyhnGX1RK9YZbPuHtvo',
      numAvailable: 6,
      numAllocated: 6,
    },
    {
      id: 3,
      name: 'Daffodil',
      color: 'yellow',
      image:
        'https://drive.google.com/uc?export=view&id=1BwQ_BdSgB6XGdU_OOm5iYQFXKjKEcW1Q',
      numAvailable: 4,
      numAllocated: 12,
    },
  ];

  let availablePlants = testPlants.map(plant => {
    return <AvailablePlant key={plant.id} plant={plant} />
  });

  return (
    <main>

      <div id="left-column">
        <h3>Available Plants</h3>
        {availablePlants}
      </div>

      <div id="right-column">
        <Flowerbed selectedPlants={testPlants} />
      </div>

    </main>
  );
};

export default Main;
