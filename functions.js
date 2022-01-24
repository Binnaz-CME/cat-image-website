import { pageNumber } from "./index.js";
import {
  section,
  previous,
  pageIndicator,
  next,
  spinner,
} from "./variables.js";



////////////////////////
const disableButton = function (button) {
  if (pageNumber === 0) {
    button.disabled = true;
    button.style.cursor = "not-allowed";
  }
};

const disable = function () {
  next.disabled = true;
  next.style.cursor = "not-allowed";
  previous.disabled = true;
  previous.style.cursor = "not-allowed";
};

const enable = function () {
    next.disabled = false;
    next.style.cursor = "pointer";
    previous.disabled = false;
    previous.style.cursor = "pointer";
  };
/////////////////////////




const createImageElements = function (catData) {
  for (let i = 0; i < catData.length; i++) {
    const imageEl = document.createElement("img");
    const imgURL = catData[i].url;
    imageEl.src = imgURL;
    section.append(imageEl);
  }
};

const removeContent = function () {
  section.textContent = "";
};

const renderError = function (msg) {
  const errorMessage = document.createElement("p");
  errorMessage.textContent = msg;
  section.append(errorMessage);
};

const setPageNumber = (pageNumber) =>
  (pageIndicator.textContent = `Showing page ${pageNumber}`);

function showSpinner() {
  spinner.classList.add("show");
}

function hideSpinner() {
  spinner.classList.remove("show");
}

export {
  disableButton,
  createImageElements,
  removeContent,
  renderError,
  setPageNumber,
  showSpinner,
  hideSpinner,
  disable,
  enable
};
