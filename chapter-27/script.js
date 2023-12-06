/*** Pet Pics ***/

/*
    Some practice on using fetch - utilizing two different public APIs (linked below)
*/

window.addEventListener('load', function () {
  const result = document.getElementById('result');

  document.addEventListener('click', function (event) {

    // RANDOM QUOTE courtesy of https://github.com/lukePeavey/quotable
    // Use the API documentation to look up the correct endpoint for a random quote
    if (event.target.id === 'dog-button') {
      fetch('https://dog.ceo/api/breeds/image/random').then(function (response) {
        response.json().then(function (data) {
          console.log(data);
          result.innerHTML = `
            <img src="${data.message}" width="300px" />
          `;
        })
      });
    }

    // Challenge! Use async/await syntax for this one.
    // RANDOM DAD JOKE courtesy of https://icanhazdadjoke.com/api
    // Use the API documentation to look up the correct endpoint for a random joke
    // Note: a header will be required!
    if (event.target.id === 'cat-button') {

      async function getCatPic() {
        let response = await fetch('https://api.thecatapi.com/v1/images/search', {
          headers: {
            // Accept: 'application/json',
            'x-api-key': 'live_OGxGd4Qnu16oAEBlonS9roxlp8vKLHd0CNZ7KHIE67CqGGGBPJdg8FSbWEgMMoNA'
          }
        });
        let data = await response.json();

        console.log(data);

        result.innerHTML = `
          <img src="${data[0].url}" width="300px" />
        `;
      }

      // Call your async function to execute the fetch
      getCatPic();
    }
  });
});