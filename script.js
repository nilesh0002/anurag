const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const navAnchors = navLinks ? navLinks.querySelectorAll("a") : [];
const productButtons = document.querySelectorAll(".btn-card");
const backToTop = document.getElementById("backToTop");
const pageLoader = document.getElementById("pageLoader");
const enrollmentValue = document.getElementById("enrollmentValue");

// Enrollment Number Handler
function setEnrollmentNumber(enrollmentNo) {
  if (enrollmentValue) {
    enrollmentValue.textContent = enrollmentNo || "--";
  }
}

// Set a sample enrollment number (replace with dynamic value)
setEnrollmentNumber("03517701725");

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
    document.body.classList.toggle("menu-open", !expanded);
  });

  navAnchors.forEach((anchor) => {
    anchor.addEventListener("click", () => {
      navLinks.classList.remove("show");
      menuToggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");
    });
  });

  document.addEventListener("click", (event) => {
    const clickedInsideNav = navLinks.contains(event.target);
    const clickedToggle = menuToggle.contains(event.target);

    if (!clickedInsideNav && !clickedToggle && navLinks.classList.contains("show")) {
      navLinks.classList.remove("show");
      menuToggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");
    }
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
