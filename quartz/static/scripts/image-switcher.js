function changeImage(src, activeButton) {
  // change image
  const img = document.getElementById("mainImage");
  if (img) {
    img.src = src;
  }

  // remove "selected" from all buttons
  const buttons = activeButton.parentElement.querySelectorAll("button");
  buttons.forEach(btn => btn.classList.remove("selected"));

  // mark clicked button
  activeButton.classList.add("selected");
}

