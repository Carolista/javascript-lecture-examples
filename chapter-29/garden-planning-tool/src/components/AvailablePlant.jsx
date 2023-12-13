const AvailablePlant = props => {

  // Use destructuring to avoid having to use props.plant.id, props.plant.name, etc
  let { id, name, color, numAvailable } = props.plant;

  return (
    <p id={id}>
      {name} - {color} - {numAvailable} available
    </p>
  );
};

export default AvailablePlant;
