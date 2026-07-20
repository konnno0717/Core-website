document.addEventListener("DOMContentLoaded", () => {
  // 年号を自動表示
  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // スクロール表示アニメーション
  const revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px"
      }
    );

    revealElements.forEach((element) => {
      revealObserver.observe(element);
    });
  } else {
    revealElements.forEach((element) => {
      element.classList.add("is-visible");
    });
  }

  // スマホメニュー
  const menuButton = document.querySelector(".menu-toggle");
  const globalNav = document.querySelector(".global-nav");

  if (menuButton && globalNav) {
    menuButton.addEventListener("click", () => {
      const isOpen = globalNav.classList.toggle("is-open");

      menuButton.classList.toggle("is-open", isOpen);
      menuButton.setAttribute("aria-expanded", String(isOpen));

      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    globalNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        globalNav.classList.remove("is-open");
        menuButton.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });
  }
});