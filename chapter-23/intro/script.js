window.addEventListener('load', function() {  

  console.log(window);
  // let response = window.confirm("Do you want to continue?");
  // console.log(response);


  const intro = document.getElementById('intro');

  console.log(document);
  console.dir(document);

  // Always available because it comes from browser's current version of the document
  console.log(intro.innerHTML);
  console.log(intro.style.fontSize);

  console.log("intro", intro);

  // Not available yet because JS can't read the CSS file - it can only read inline
  console.log("color", intro.style.color);
  
  intro.innerHTML = 'Ready to go!';
  intro.style.color = 'green';
  intro.style.fontSize = '48pt';

  intro.style.fontWeight = 'bold';
  intro.style.fontStyle = 'italic';

  console.log("intro", intro);

  console.log(intro.innerHTML);
  console.log(intro.style.color);
  
});
