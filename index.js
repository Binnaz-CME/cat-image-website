import { previous, next } from "./variables.js";
import {
  disableButton,
  createImageElements,
  removeContent,
  renderError,
  setPageNumber,
  showSpinner,
  hideSpinner,
  disable,
  enable
} from "./functions.js";

let pageNumber = 0;

const renderCatImages = async (pageNumber) => {
  removeContent();

  try {
    
    showSpinner();
    const response = await fetch(
      `https://api.thecatapi.com/v1/images/search?limit=12&order=asc&page=${pageNumber}`,
      {
        headers: {
          "x-api-key": "875486a5-9423-44d9-ad2b-812b8df4b1be",
        },
      }
    );
    const catData = await response.json();

    removeContent();
    createImageElements(catData);
    hideSpinner();
  } catch (err) {
    removeContent();
    renderError(`You're offline 🤯 Check your internet-connection!`);
  } finally {
  }
};

window.addEventListener("load", async (e) => {
  showSpinner();
  setPageNumber(pageNumber);
  disableButton(previous);
  await renderCatImages(pageNumber);
  hideSpinner();
});

next.addEventListener("click", async (e) => {
  pageNumber++;
  setPageNumber(pageNumber);
  previous.disabled = false;
  previous.style.cursor = "pointer";
  await renderCatImages(pageNumber);
});

previous.addEventListener("click", async (e) => {
  pageNumber--;
  setPageNumber(pageNumber);
  disableButton(previous);
  await renderCatImages(pageNumber);
});

export { pageNumber };
