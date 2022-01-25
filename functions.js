import { pageNumber } from "./index.js";
import {
  section,
  previous,
  pageIndicator,
  next,
  loadingSpinner,
} from "./variables.js";

const createContent = async () => {
  try {
    const response = await fetch(
      `https://api.thecatapi.com/v1/images/search?limit=12&order=asc&page=${pageNumber}`,
      {
        headers: {
          "x-api-key": "875486a5-9423-44d9-ad2b-812b8df4b1be",
        },
      }
    );
    const catData = await response.json();

    removeSectionContent(); //removes previous content
    createImageElements(catData); //creates new content
  } catch (err) {
    hideLoadingSpinner();
    removeSectionContent();
    renderError(`You're offline 🤯 Check your internet-connection!`);
  }
};

const renderContent = async (pageNumber) => {
  showLoadingSpinner();
  await createContent();
  hideLoadingSpinner();
};

const createImageElements = (catData) => {
  for (let i = 0; i < catData.length; i++) {
    const imageEl = document.createElement("img");
    const imgURL = catData[i].url;
    imageEl.src = imgURL;
    section.append(imageEl);
  }
};

const removeSectionContent = () => (section.textContent = "");

const renderError = (msg) => {
  const errorMessage = document.createElement("p");
  errorMessage.textContent = msg;
  section.append(errorMessage);
};

const setPageNumber = (pageNumber) =>
  (pageIndicator.textContent = `Showing page ${pageNumber}`);

const disablePreviousButtonIfPageIsZero = () => {
  if (pageNumber === 0) {
    previous.disabled = true;
  }
};

const disableButtons = () => {
  next.disabled = true;
  previous.disabled = true;
};

const enableButtons = () => {
  previous.disabled = false;
  next.disabled = false;
};

const showLoadingSpinner = () => loadingSpinner.classList.add("show");

const hideLoadingSpinner = () => loadingSpinner.classList.remove("show");

export {
  renderContent,
  disablePreviousButtonIfPageIsZero,
  setPageNumber,
  disableButtons,
  enableButtons,
};
