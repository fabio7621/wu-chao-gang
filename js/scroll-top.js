const scrollBtn = document.getElementById("scrollBtn");

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
