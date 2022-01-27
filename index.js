import { previous, next } from "./variables.js";
import {
  setPageNumber,
  renderContent
} from "./functions.js";

let pageNumber = 0;

window.addEventListener("load", async () => {
  setPageNumber(pageNumber);
  await renderContent(pageNumber);
});

next.addEventListener("click", async () => {
  pageNumber++;
  setPageNumber(pageNumber);
  await renderContent(pageNumber);
});

previous.addEventListener("click", async () => {
  pageNumber--;
  setPageNumber(pageNumber);
  await renderContent(pageNumber);
});

export { pageNumber };
