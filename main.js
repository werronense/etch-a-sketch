document.addEventListener("DOMContentLoaded", () => {
  const screen = document.querySelector("#screen");

  // event handler for mouseover event
  function darkenPixel(pixel) {
    console.log(pixel.getAttribute("opacity"));
  }


  function makePixels(dimension) {
    const pixelArray = [];

    for (j = 0; j < dimension; j++) {
      const newPixel = document.createElement("div");
      newPixel.classList.add("pixel");

      newPixel.setAttribute("background", "gray");
      newPixel.setAttribute("opacity", "0");

      newPixel.addEventListener("mouseover", e => {
        darkenPixel(e.target);
      });
      pixelArray.push(newPixel);
    }
    return pixelArray;
  }


  function makeRows(dimension) {
    const rowArray = [];

    for (i = 0; i < dimension; i++) {
      const newRow = document.createElement("div");
      newRow.classList.add("row");

      const pixels = makePixels(dimension);
      pixels.forEach(pixel => {
        newRow.appendChild(pixel);
      });
      rowArray.push(newRow);
    }
    return rowArray;
  }


  function pixelateScreen(dimension) {
      const rows = makeRows(dimension);
      rows.forEach(row => {
        screen.appendChild(row);
      });
    }

  /*
  function setScreen(selectedScreen) {

  }

  function resetScreen(selectedScreen) {

  }
  */
  pixelateScreen(16);
})
