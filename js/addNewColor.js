import * as load from './loadPalettes';
const addNewStickerClassName = ".addnewsticker";
// const addNewStickerClassName = "#palette--new";
const domToListenToAddNewColor = document.querySelector(addNewStickerClassName);

export let listenToNewColorEvent = () =>
{
  domToListenToAddNewColor.addEventListener("click", askForNewColor);
}

let askForNewColor = function()
{
  domToListenToAddNewColor.removeEventListener("click", askForNewColor);
  const colorPicker = this.querySelector("input")
  colorPicker.click();

  colorPicker.addEventListener("change", createNewColor, false);
}

function createNewColor() {
  this.removeEventListener("change", createNewColor);

  let color = this.value;

  domToListenToAddNewColor.insertAdjacentHTML("beforebegin", load.createDomColorPalette(color, color));
  load.changePaletteBgColor();
  domToListenToAddNewColor.addEventListener("click", askForNewColor);

}
