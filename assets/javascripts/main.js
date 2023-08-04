// Button scroller top
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

scrollToTopBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

//---------------------------

const mobileMenu = document.querySelector(".mobile-menu");
const headerBot = document.querySelector(".header__bot");

mobileMenu.addEventListener("click", () => {
  headerBot.classList.add("show-menu");
});
// Function to close the mobile menu when clicking outside
document.addEventListener("click", (event) => {
  const targetElement = event.target;
  if (
    !headerBot.contains(targetElement) &&
    !mobileMenu.contains(targetElement)
  ) {
    headerBot.classList.remove("show-menu");
  }
});

// Handle choose address
const checkoutCards = document.querySelectorAll(".checkout__card");
checkoutCards.forEach((card) => {
  card.addEventListener("click", () => {
    checkoutCards.forEach((card) => {
      card.classList.remove("card-active");
    });

    card.classList.add("card-active");
  });
});

// Handle choose payment method
const paymentCards = document.querySelectorAll(".pay__card");

paymentCards.forEach((card) => {
  card.addEventListener("click", () => {
    paymentCards.forEach((card) => {
      card.classList.remove("pay-active");
    });

    card.classList.add("pay-active");
  });
});

// Handle choose image

const subImages = document.querySelectorAll(".sub-image img");
const mainImage = document.querySelector(".image-main img");

// Add a click event listener to each sub-image
subImages.forEach((subImage) => {
  subImage.addEventListener("click", () => {
    const newImageSrc = subImage.getAttribute("src");

    subImages.forEach((img) => {
      img.classList.remove("active-image");
    });

    mainImage.setAttribute("src", newImageSrc);
    subImage.classList.add("active-image");
  });
});
