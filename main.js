document.addEventListener("DOMContentLoaded", () => {
  const screen = document.querySelector("#screen");

  function  darkenPixel(pixel) {
    console.log(pixel.getAttribute("opacity"));
  }

  function generatePixels(dimension) {
    for (i = 0; i < dimension; i++) {
      const newRow = document.createElement("div");

      newRow.classList.add("row");

      for (j = 0; j < dimension; j++) {
        const newPixel = document.createElement("div");
        newPixel.classList.add("pixel");

        newPixel.setAttribute("background", "gray");
        newPixel.setAttribute("opacity", "0");

        newPixel.addEventListener("mouseover", e => {
          darkenPixel(e.target);
        });
        
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
