// document.addEventListener("DOMContentLoaded", function () {
//   const addBtn = document.getElementById("addbtn");
//   const xBtn = document.getElementById("x-btn");
//   const darkBox = document.querySelector(".dark-bg-box");

//   let isScrollDisabled = false;

//   addBtn.addEventListener("click", () => {
//     if (!isScrollDisabled) {
//       const scrollY = window.scrollY || window.pageYOffset;
//       document.body.style.top = `-${scrollY}px`;
//       document.body.style.position = "fixed";
//       document.body.style.width = "100%";
//       isScrollDisabled = true;
//     }
//     darkBox.style.display = "block";
//   });

//   xBtn.addEventListener("click", () => {
//     if (isScrollDisabled) {
//       document.body.style.position = "";
//       document.body.style.top = "";
//       document.body.style.width = "";
//       isScrollDisabled = false;
//       window.scrollTo(0, Math.abs(parseInt(document.body.style.top, 10)));
//     }
//     darkBox.style.display = "none";
//   });

//   document.addEventListener("keydown", (event) => {
//     if (isScrollDisabled && event.key === "Escape") {
//       darkBox.style.display = "none";
//       document.body.style.position = "";
//       document.body.style.top = "";
//       document.body.style.width = "";
//       isScrollDisabled = false;
//       window.scrollTo(0, Math.abs(parseInt(document.body.style.top, 10)));
//     }
//   });
// });
document.addEventListener("DOMContentLoaded", function () {
  const addBtns = document.querySelectorAll("#addbtn");
  const xBtn = document.getElementById("x-btn");
  const darkBox = document.querySelector(".dark-bg-box");

  let isScrollDisabled = false;
  let scrollTop = 0;

  addBtns.forEach(function (addBtn) {
    addBtn.addEventListener("click", () => {
      if (!isScrollDisabled) {
        scrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop ||
          0;
        document.body.style.top = `-${scrollTop}px`;
        document.body.style.position = "fixed";
        document.body.style.width = "100%";
        isScrollDisabled = true;
      }
      darkBox.style.display = "block";
    });
  });

  xBtn.addEventListener("click", () => {
    if (isScrollDisabled) {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      isScrollDisabled = false;
      window.scrollTo(0, scrollTop);
    }
    darkBox.style.display = "none";
  });

  document.addEventListener("keydown", (event) => {
    if (isScrollDisabled && event.key === "Escape") {
      darkBox.style.display = "none";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      isScrollDisabled = false;
      window.scrollTo(0, scrollTop);
    }
  });
});
