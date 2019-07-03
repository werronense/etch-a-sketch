document.addEventListener("DOMContentLoaded", () => {
  const screen = document.querySelector("#screen");

  function generatePixels(dimension) {
    for (i = 0; i < dimension; i++) {
      const newRow = document.createElement("div");

      newRow.classList.add("row");

      for (j = 0; j < dimension; j++) {
        const newPixel = document.createElement("div");
        newPixel.classList.add("pixel");
        newRow.appendChild(newPixel);
      }

      screen.appendChild(newRow);
    }
  }
  /*
  function setScreen(selectedScreen) {

  }

  function resetScreen(selectedScreen) {

  }
  */
  generatePixels(16);
})
