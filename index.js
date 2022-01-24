import { previous, next } from "./variables.js";
import {
  disablePreviousButton,
  createImageElements,
  removeSectionContent,
  renderError,
  setPageNumber,
  showLoadingSpinner,
  hideLoadingSpinner,
  disableButtons,
  enableButtons,
} from "./functions.js";

let pageNumber = 0;

const renderCatImages = async (pageNumber) => {
  removeSectionContent();

  try {
    showLoadingSpinner();
    const response = await fetch(
      `https://api.thecatapi.com/v1/images/search?limit=12&order=asc&page=${pageNumber}`,
      {
        headers: {
          "x-api-key": "875486a5-9423-44d9-ad2b-812b8df4b1be",
        },
      }
    );
    const catData = await response.json();

    removeSectionContent();
    createImageElements(catData);
    hideLoadingSpinner();
  } catch (err) {
    removeSectionContent();
    renderError(`You're offline 🤯 Check your internet-connection!`);
  }
};

window.addEventListener("load", async (e) => {
  showLoadingSpinner();
  setPageNumber(pageNumber);
  disablePreviousButton();
  await renderCatImages(pageNumber);
  hideLoadingSpinner();
});

next.addEventListener("click", async (e) => {
  disableButtons();
  pageNumber++;
  setPageNumber(pageNumber);
  await renderCatImages(pageNumber);
  enableButtons();
});

previous.addEventListener("click", async (e) => {
  disableButtons();
  pageNumber--;
  setPageNumber(pageNumber);
  await renderCatImages(pageNumber);
  enableButtons();
  disablePreviousButton();
});

export { pageNumber };
