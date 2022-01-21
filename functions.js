import { page } from "./index.js";
import { section, previous } from "./variables.js";

const disableButton = function () {
  if (page === 0) {
    previous.disabled = true;
    previous.style.cursor = "not-allowed";
  }
};

const createImages = function (data) {
  for (let i = 0; i < data.length; i++) {
    const imageEl = document.createElement("img");
    const imgURL = data[i].url;
    imageEl.src = imgURL;
    section.append(imageEl);
  }
};

const removeImages = function (allImageEl) {
  allImageEl.forEach((el) => el.remove());
};

export { disableButton, createImages, removeImages };
