import { pageNumber } from "./index.js";
import {
  section,
  previous,
  pageIndicator,
  next,
  loadingSpinner,
} from "./variables.js";

const disablePreviousButton = function () {
  if (pageNumber === 0) {
    previous.disabled = true;
    previous.style.cursor = "not-allowed";
  }
};

const disableButtons = function () {
  next.disabled = true;
  next.style.cursor = "not-allowed";
  previous.disabled = true;
  previous.style.cursor = "not-allowed";
};

const enableButtons = function () {
  previous.disabled = false;
  previous.style.cursor = "pointer";
  next.disabled = false;
  next.style.cursor = "pointer";
};

const createImageElements = function (catData) {
  for (let i = 0; i < catData.length; i++) {
    const imageEl = document.createElement("img");
    const imgURL = catData[i].url;
    imageEl.src = imgURL;
    section.append(imageEl);
  }
};

const removeSectionContent = function () {
  section.textContent = "";
};

const renderError = function (msg) {
  const errorMessage = document.createElement("p");
  errorMessage.textContent = msg;
  section.append(errorMessage);
};

const setPageNumber = (pageNumber) =>
  (pageIndicator.textContent = `Showing page ${pageNumber}`);

function showLoadingSpinner() {
  loadingSpinner.classList.add("show");
}

function hideLoadingSpinner() {
  loadingSpinner.classList.remove("show");
}

export {
  disablePreviousButton,
  createImageElements,
  removeSectionContent,
  renderError,
  setPageNumber,
  showLoadingSpinner,
  hideLoadingSpinner,
  disableButtons,
  enableButtons,
};
