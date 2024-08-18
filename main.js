const shareLinks = document.querySelector(".share-links");
const shareIcon = document.querySelector(".share-icon");

shareIcon.addEventListener("click", () => {
  shareLinks.classList.toggle("hidden");
});
