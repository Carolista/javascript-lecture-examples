window.addEventListener('load', function() {  

  // TODO: Take a look at native global objects, window and document
    
  // TODO: Use window.alert()

  // TODO: Use confirm() - without appending to window 
  
  
  const intro = document.getElementById('intro');

  // Always available because it comes from browser's current version of the document
  console.log(intro.innerHTML);
  console.log(intro.style.fontSize);

  // Not available yet because JS can't read the CSS file - it can only read inline
  console.log(intro.style.color);
  
  // TODO: Change the values of the text, color, and font size


  // TODO: Make the text bold and italicized as well


  // TODO: Log the intro element to see the inline styling added


  // TODO: Log all five properties to see their values
  
});
