document.addEventListener("DOMContentLoaded", function () {
  const bottomLine = document.querySelector(".bottom__line");
  const menuItems = document.querySelectorAll(".menu-item");

  function moveBottomLine(element) {
    const rect = element.getBoundingClientRect();
    const parentRect = element.parentElement.getBoundingClientRect();
    const width = rect.width;
    const left = rect.left - parentRect.left;

    bottomLine.style.transform = `translateX(${left}px)`;
    bottomLine.style.width = `${width}px`;
  }

  menuItems.forEach((item) => {
    item.addEventListener("click", function (event) {
      event.preventDefault();
      setTimeout(() => {
        menuItems.forEach((item) => item.classList.remove("active"));
        setTimeout(() => {
          this.classList.add("active");
        }, 300);

        moveBottomLine(this);
      }, 0);
    });
  });

  // Trigger "Home" menu-item as active on page load
  const homeMenuItem = document.querySelector(".menu-item.active");
  moveBottomLine(homeMenuItem);
});
