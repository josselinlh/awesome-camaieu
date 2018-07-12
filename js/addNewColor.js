import * as load from './loadPalettes';
const domToListen = document.querySelector("#palette--new");

export let listenToNewColorEvent = () =>
{
  console.log("listenToNewColorEvent");
  domToListen.addEventListener("click", askForNewColor);
}

let askForNewColor = function()
{
  domToListen.removeEventListener("click", askForNewColor);
  const colorPicker = this.querySelector("input")
  colorPicker.click();

  colorPicker.addEventListener("change", createNewColor, false);
}

function createNewColor() {
  this.removeEventListener("change", createNewColor);

  let color = this.value;

  domToListen.insertAdjacentHTML("beforebegin", load.createDomColorPalette(color, color));
  load.changePaletteBgColor();
  domToListen.addEventListener("click", askForNewColor);

}
