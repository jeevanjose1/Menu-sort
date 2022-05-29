"use strict";

import { detials } from "./content.js";

// const arr = detials.reduce(
//   (acc, arra) => {
//     if (!acc.includes(arra.catogary)) acc.push(arra.catogary);
//     return acc;
//   },
//   ["all"]
// );

const menu = document.querySelector(".menu");
const mainmenu = document.querySelector(".menudiv");

const btn = document.querySelector(".btn");

//////dynamic//////
const add = function (menu) {
  let display = menu.map((e) => {
    return `<div class="menu">
      <img src="${e.img}" alt="" class="menuimg" />
      <div class="detials">
        <h2 class="detialshead">
          ${e.name} <span class="price">${e.price}RS</span>
        </h2>
        <p class="descs">
          ${e.desc}
        </p>
      </div>
    </div>`;
  });
  display = display.join(" ");
  mainmenu.innerHTML = display;
};

///////filter//////

////////events//////
document.addEventListener("DOMContentLoaded", () => {
  add(detials);
  let grr = [
    "all",
    ...new Set(
      detials.map((e) => {
        return e.catogary;
      })
    ),
  ];
  let btnss = grr
    .map((e) => {
      return `<button data-cot="${e}" class="bt">${e}</button>`;
    })
    .join("");
  btn.innerHTML = btnss;
  const btns = document.querySelectorAll(".bt");
  btns.forEach((e) => {
    e.addEventListener("click", (e) => {
      const dd = e.target.dataset.cot;

      const menuit = detials.filter((g) => {
        if (g.catogary === dd) {
          return g;
        }
      });
      if (dd === "all") {
        add(detials);
      } else {
        add(menuit);
      }
    });
  });
});

//////////////
