document.addEventListener("DOMContentLoaded", () => {
  const screen = document.querySelector("#screen");
  const resetBtn = document.querySelector("#reset-button");

  resetBtn.addEventListener("click", () => {
    resetScreen(screen);
  });

  // **functions for pixelating the #screen**
  // event handler for mouseover event
  function darkenPixel(pixel) {
    const opacityValue = Number(pixel.style.opacity);
    pixel.style.opacity = opacityValue < 1 ? `${opacityValue + 0.25}` : "1";
  }

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

  // **functions for resetting the #screen**
  function removePixels(row) {
    const pixels = row.querySelectorAll(".pixel");
    pixels.forEach(pixel => {
      row.removeChild(pixel);
    });
  }

  function removeRows(screen) {
    const rows = screen.querySelectorAll(".row");
    rows.forEach(row => {
      screen.removeChild(row);
    });
  }

  function requestDimensions() {
    return prompt("Enter the desired number of pixels per side (64 or fewer recommended):");
  }

  function resetScreen(screen) {
    const dimension = requestDimensions()
    removeRows(screen);
    pixelateScreen(dimension);
  }

  // create initial #screen with 16 x 16 dimensions
  pixelateScreen(16);
})
