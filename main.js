document.addEventListener("DOMContentLoaded", () => {
  const screen = document.querySelector("#screen");

  // event handler for mouseover event
  function darkenPixel(pixel) {
    const opacityValue = Number(pixel.style.opacity);
    pixel.style.opacity = opacityValue < 1 ? `${opacityValue + 0.25}` : "1";
  }

  // create array of pixels equal to dimension of #screen
  function makePixels(dimension) {
    const pixelArray = [];

    for (j = 0; j < dimension; j++) {
      const newPixel = document.createElement("div");
      newPixel.classList.add("pixel");

      newPixel.style.backgroundColor = "gray";
      newPixel.style.opacity = "0";

      newPixel.addEventListener("mouseover", e => {
        darkenPixel(e.target);
      });
      pixelArray.push(newPixel);
    }
    return pixelArray;
  }

  // create array of rows equal to dimension of #screen
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
  pixelateScreen(64);
})
