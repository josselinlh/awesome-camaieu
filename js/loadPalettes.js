export const domRoot = document.querySelector(".list-palette");

export let createDomColorPalette = (name = "", color = "#fff") => {
  const domLiColor = `
    <li class="palette palette--round">
      <div data-color="`+color+`" class="palette-color">
        <div class="palette-color__square palette-color__lighten"></div>
        <div class="palette-color__square palette-color__darken"></div>
      </div>
      <div class="palette-color__content">
        <h2 class="palette-color__name">`+name+`</h2>
        <h2 class="palette-color__icon"><i class="fa fa-edit"></i></h2>
        <span class="palette-color__code">`+color+`</span>
      </div>
    </li>
    `;

  let camaieu = document.awesomeCamaieu;
  camaieu.push({"name":name, "color":color});
  refreshLocalStorage(camaieu);

  //listen
  const domToListenToChangeColorName = document.querySelectorAll(".palette-color__content");
  Array.from(domToListenToChangeColorName).forEach(x=>x.addEventListener("click", changeColorName));

  return domLiColor;
};

let changeColorName = function() {
  console.log("changeColorName to implement");

}

export let changePaletteBgColor = () =>
{
  const dom = document.querySelectorAll(".palette-color");

  let getDataAndChangeIt = function(dom)
  {
    let bgColor = dom.getAttribute("data-color");

    if (typeof bgColor === "string")
    {
      Array.from(dom.children).forEach(el => el.style["background-color"] = bgColor);
    }
  }
  Array.from(dom).forEach(el => getDataAndChangeIt(el));

};

function refreshLocalStorage(array) {
  //test memory local storage

  let jsonString = JSON.stringify(array);

  window.localStorage.setItem("awesomeCamaieu", jsonString);

}
