let catsData, allImageEl;
let page = 0;

import { previous, next, pageIndicator } from "./variables.js";
import { disableButton, createImages, removeImages } from "./functions.js";


const getCats = async (page) => {
  try {
    const response = await fetch(
      `https://api.thecatapi.com/v1/images/search?limit=12&order=asc&page=${page}`,
      {
        headers: {
          "x-api-key": "875486a5-9423-44d9-ad2b-812b8df4b1be",
        },
      }
    );
  //   if(!response) {
  //   throw new Error(`You're offline 🤯`);
  // }
    catsData = await response.json();
  } catch(Error) {
    // console.error(Error);
  } finally {
    // previous.disabled = true;
    // next.disabled = true;
  }
};

const setPageNumber = (page) => pageIndicator.textContent = `Showing page ${page}`;


  window.addEventListener("load", async (e) => {
    disableButton();
    await getCats(page);
    createImages(catsData);
    setPageNumber(page);
  });

next.addEventListener("click", async (e) => {
  page++;
  previous.disabled = false;
  previous.style.cursor = "pointer";
  await getCats(page);
  allImageEl = document.querySelectorAll("img");
  createImages(catsData);
  removeImages(allImageEl);
  setPageNumber(page);
  return page;
});

previous.addEventListener("click", async (e) => {
  page--;
  disableButton();
  await getCats(page);
  allImageEl = document.querySelectorAll("img");
  createImages(catsData);
  removeImages(allImageEl);
  setPageNumber(page);
  return page;
});

export { page };
