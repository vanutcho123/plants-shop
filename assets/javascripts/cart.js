// --------------- Handle increase reduce-------------
const decrementButtons = document.querySelectorAll(".decrement");
const incrementButtons = document.querySelectorAll(".increment");
const quantityInputs = document.querySelectorAll("input[type='number']");
const priceElements = document.querySelectorAll(".price");
const subtotalElement = document.querySelector("#subtotalValue");
console.log(subtotalElement);
const totalValueElement = document.querySelector("#totalValue");
const shippingCost = 5.0;

// Add event listeners to decrement buttons
decrementButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const input = button.nextElementSibling;
    const currentValue = parseInt(input.value, 10);
    if (currentValue > 1) {
      input.value = currentValue - 1;
      updatePrice(index, currentValue - 1);
      calculateSubtotal();
      calculateTotal();
    }
  });
});

// Add event listeners to increment buttons
incrementButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const input = button.previousElementSibling;
    const currentValue = parseInt(input.value, 10);
    input.value = currentValue + 1;
    updatePrice(index, currentValue + 1);
    calculateSubtotal();
    calculateTotal();
  });
});

// Function to update the price based on quantity
function updatePrice(index, quantity) {
  const price = 75;
  const totalPrice = price * quantity;
  priceElements[index].textContent = "$" + totalPrice.toFixed(2);
}

// Function to calculate subtotal
function calculateSubtotal() {
  let subtotal = 0;
  priceElements.forEach((priceElement) => {
    const price = parseFloat(priceElement.textContent.replace("$", ""));
    subtotal += price;
  });
  subtotalElement.textContent = "$" + subtotal.toFixed(2);
}
// Function to calculate total
function calculateTotal() {
  const subtotal = parseFloat(subtotalElement.textContent.replace("$", ""));
  const total = subtotal + shippingCost;
  totalValueElement.textContent = "$" + total.toFixed(2);
}

// Initial call to calculate subtotal and total
calculateSubtotal();
calculateTotal();
