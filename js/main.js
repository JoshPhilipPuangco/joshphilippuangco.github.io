/* Josh Puangco | IT Portfolio — mobile nav toggle (Home page nav bar). */

document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.getElementById("nav-toggle");
  var menu = document.getElementById("nav-menu");

  if (!toggle || !menu) return;

  function setOpen(isOpen) {
    menu.classList.toggle("nav-menu--open", isOpen);
    toggle.classList.toggle("nav-toggle--open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  }

  toggle.addEventListener("click", function () {
    var isOpen = !menu.classList.contains("nav-menu--open");
    setOpen(isOpen);
  });

  var menuLinks = menu.querySelectorAll(".nav-link");
  menuLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      setOpen(false);
    });
  });
});
