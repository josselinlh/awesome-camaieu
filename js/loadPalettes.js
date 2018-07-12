export const domRoot = document.querySelector(".list-palette");

export let createDomColorPalette = (name = "", color = "#fff") => {
  const domLiColor = `
    <li class="palette palette--round">
      <div data-color="`+color+`" class="palette-color">
        <div class="palette-color__square palette-color__lighten"></div>
        <div class="palette-color__square palette-color__darken"></div>
      </div>
      <div class="palette-color__content">
        <h1 class="palette-color__name">`+name+`</h1>
        <span class="palette-color__code">`+color+`</span>
      </div>
    </li>
    `;
  return domLiColor;
};


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
