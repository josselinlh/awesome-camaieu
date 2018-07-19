//Dom variables
// const selectorCamaieu = ".list-palette";
// const listenChangeColor = ".palette-color__content";
// const getChangeColor = ".palette-color";
// const colorAttrName = "data-color";

const selectorCamaieu = ".awesomecamaieu";
const listenChangeColor = ".colouredsticker__content";
const getChangeColor = ".colouredsticker__color";
const colorAttrName = "data-color";

export const domRoot = document.querySelector(selectorCamaieu);

export let createDomColorPalette = (name = "", color = "#fff") => {
  const domLiColor = `
  <article class="colouredsticker colouredsticker--round">
    <div data-color="`+color+`" class="colouredsticker__color">
      <div class="colouredsticker__color--first">
      </div>
      <div class="colouredsticker__color--second">
      </div>
    </div>
    <div class="colouredsticker__content">
      <p class="colouredsticker__content--name">
        `+name+`
      </p>
      <p class="colouredsticker__content--code">
        `+color+`
      </p>
      <p class="colouredsticker__content--icon">
        <i class="fa fa-cogs"></i>
      </p>
    </div>
  </article>
    `;
  // const domLiColor = `
  //   <li class="palette palette--round">
  //     <div data-color="`+color+`" class="palette-color">
  //       <div class="palette-color__square palette-color__lighten"></div>
  //       <div class="palette-color__square palette-color__darken"></div>
  //     </div>
  //     <div class="palette-color__content">
  //       <h2 class="palette-color__name">`+name+`</h2>
  //       <h2 class="palette-color__icon"><i class="fa fa-edit"></i></h2>
  //       <span class="palette-color__code">`+color+`</span>
  //     </div>
  //   </li>
  //   `;



  let camaieu = document.awesomeCamaieu;
  camaieu.push({"name":name, "color":color});
  refreshLocalStorage(camaieu);

  //listen
  const domToListenToChangeColorName = document.querySelectorAll(listenChangeColor);
  Array.from(domToListenToChangeColorName).forEach(x=>x.addEventListener("click", changeColorName));

  return domLiColor;
};

let changeColorName = function() {

}

export let changePaletteBgColor = () =>
{
  const dom = document.querySelectorAll(getChangeColor);

  let getDataAndChangeIt = function(dom)
  {
    let bgColor = dom.getAttribute(colorAttrName);

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
