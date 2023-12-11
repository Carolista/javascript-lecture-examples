import AvailablePlant from './AvailablePlant';

const Main = () => {
  let testPlants = [
    {
      id: 1,
      name: 'Hyacinth',
      color: 'blue',
      image: 'hyacinth-blue.png',
      numAvailable: 8,
    },
    {
      id: 2,
      name: 'Tulip',
      color: 'red',
      image: 'tulip-red.png',
      numAvailable: 12,
    },
    {
      id: 3,
      name: 'Daffodil',
      color: 'yellow',
      image: 'daffodil-yellow.png',
      numAvailable: 16,
    },
  ];

  return (
    <main>
      <div id="left-column">
        <h3>Available Plants</h3>
        <AvailablePlant plant={testPlants[0]} />
        <AvailablePlant plant={testPlants[1]} />
        <AvailablePlant plant={testPlants[2]} />
      </div>
    </main>
  );
};

export default Main;
