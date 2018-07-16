import * as load from './loadPalettes';
import * as newColor from './addNewColor';
import style from '../sass/style.scss';

{
  const urlJson = 'color-list.json';
  document.awesomeCamaieu =[];

  let createFromJson = (json) =>
  {
    Array
    .from(json)
    .forEach(el => load.domRoot.insertAdjacentHTML("afterbegin", load.createDomColorPalette(el.name, el.color)));
  }

  //test if localStorage exists
  if(window.localStorage.getItem("awesomeCamaieu"))
  {
    let json = JSON.parse(window.localStorage.getItem("awesomeCamaieu"));
    let jsonPromise = new Promise(function(resolve, reject) {
      resolve(createFromJson(json));
    });

    jsonPromise.then(function(data) {
      load.changePaletteBgColor();
    });
  }
  else {
    //call JSON to load the palette app
    fetch(urlJson)
    .then(response => response.json())
    .then(myJson => createFromJson(myJson))
    .then(load.changePaletteBgColor);
  }


  newColor.listenToNewColorEvent();

}
