// JavaScript to handle the collapsible behavior
const collapsibles = document.querySelectorAll(".collapsible");

collapsibles.forEach((collapsible) => {
  const checkbox = collapsible.querySelector('input[type="checkbox"]');
  const arrow = collapsible.querySelector(".arrow");

  checkbox.addEventListener("change", () => {
    const collapsibleText = collapsible.querySelector(".collapsible-text");
    collapsibleText.style.maxHeight = checkbox.checked ? "400px" : "0";
    collapsibleText.style.opacity = checkbox.checked ? "1" : "0.5";
  });

  checkbox.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  collapsible.addEventListener("click", () => {
    checkbox.checked = !checkbox.checked;
    arrow.style.backgroundImage = checkbox.checked
      ? 'url("../../assets/minus.svg")'
      : 'url("../../assets/plus.svg")';
  });
});
