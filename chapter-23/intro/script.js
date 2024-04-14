window.addEventListener('load', function() {  

  console.log(window);

  // window.alert("\nClick OK after you've read this message!");

  // let response = confirm("\nYou can choose OK or Cancel...");
  // console.log(response);

  console.log("\nDocument LOG:\n", document);
  console.log("\nDocument DIR:")
  console.dir(document);



  const intro = document.getElementById('intro');

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
