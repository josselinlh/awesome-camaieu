import * as load from './loadPalettes';
import * as newColor from './addNewColor';

{
  const urlJson = 'color-list.json';

  //call JSON to load the palette app
  fetch(urlJson)
  .then(response => response.json())
  .then(myJson => Array.from(myJson).forEach(el => load.domRoot.insertAdjacentHTML("afterbegin", load.createDomColorPalette(el.name, el.color))))
  .then(load.changePaletteBgColor);

  newColor.listenToNewColorEvent();

}
