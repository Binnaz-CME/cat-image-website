import { previous, next } from "./variables.js";
import {
  disablePreviousButtonIfPageIsZero,
  setPageNumber,
  disableButtons,
  enableButtons,
  renderContent,
} from "./functions.js";

let pageNumber = 0;

window.addEventListener("load", async (e) => {
  setPageNumber(pageNumber);
  disablePreviousButtonIfPageIsZero();
  await renderContent(pageNumber);
});

next.addEventListener("click", async (e) => {
  disableButtons();
  pageNumber++;
  setPageNumber(pageNumber);
  await renderContent(pageNumber);
  enableButtons();
});

previous.addEventListener("click", async (e) => {
  disableButtons();
  pageNumber--;
  setPageNumber(pageNumber);
  await renderContent(pageNumber);
  enableButtons();
  disablePreviousButtonIfPageIsZero();
});

export { pageNumber };
