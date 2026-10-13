"use strict";

const previewImages = document.querySelectorAll(".preview");
const previewArea = document.getElementById("image");
const defaultMessage = "Hover over an image below to display here.";

function upDate(previewPic) {
  console.log("upDate triggered", previewPic);
  console.log("previewPic alt:", previewPic.alt);
  console.log("previewPic source:", previewPic.src);

  previewArea.textContent = previewPic.alt;
  previewArea.style.backgroundImage = `url("${previewPic.src}")`;
}

function undo() {
  console.log("undo triggered");
  previewArea.style.backgroundImage = "url('')";
  previewArea.textContent = defaultMessage;
}

previewImages.forEach((previewPic) => {
  previewPic.addEventListener("mouseenter", () => upDate(previewPic));
  previewPic.addEventListener("mouseleave", undo);
  previewPic.addEventListener("focus", () => upDate(previewPic));
  previewPic.addEventListener("blur", undo);
});
