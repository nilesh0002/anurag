const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const navAnchors = navLinks ? navLinks.querySelectorAll("a") : [];
const productButtons = document.querySelectorAll(".btn-card");
const backToTop = document.getElementById("backToTop");
const pageLoader = document.getElementById("pageLoader");

window.addEventListener("load", () => {
  if (pageLoader) {
    pageLoader.classList.add("hidden");
  }
});

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    navLinks.classList.toggle("show");
  });

  navAnchors.forEach((anchor) => {
    anchor.addEventListener("click", () => {
      navLinks.classList.remove("show");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

productButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const productName = button.getAttribute("data-product") || "item";
    alert(`${productName} added to cart.`);
  });
});

if (backToTop) {
  window.addEventListener("scroll", () => {
    backToTop.classList.toggle("show", window.scrollY > 380);
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
