import { capitalize } from "../shared/utils";

const AvailablePlant = props => {

  // Use destructuring to avoid having to use props.plant.id, props.plant.name, etc
  let { name, color, image, numAvailable } = props.plant;

  const handleReturnPlant = () => {
    console.log(`This button will return 1 ${color} ${name}.`);
  };

  const handleAllocatePlant = () => {
    console.log(`This button will allocate 1 ${color} ${name}.`);
  };

  return (
    <div className="card available-plant-card">
      <div className="img-txt-combo">
        <img src={image} width="50px" height="50px" alt={`${color} ${name}`} />
        <p>
          {name}, {capitalize(color)}
          <br />
          <span className="amount-txt">{numAvailable} available</span>
        </p>
      </div>
      <div className="arrow-group">
        <span
          className="chevron-left fa fa-chevron-circle-left"
          title="Remove one plant from flowerbed"
          onClick={handleReturnPlant}></span>
        <span
          className="chevron-right fa fa-chevron-circle-right"
          title="Add one plant to flowerbed"
          onClick={handleAllocatePlant}></span>
      </div>
    </div>
  );
};

export default AvailablePlant;
