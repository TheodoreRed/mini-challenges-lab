"use strict";

// Vending Machine
// selectors & variables
const colaBtn = document.querySelector(".cola");
const peanutsBtn = document.querySelector(".peanuts");
const chocolateBtn = document.querySelector(".chocolate");
const gummyBtn = document.querySelector(".gummies");

const totalP = document.querySelector(".total");
let vendingTotal = 0;

colaBtn.addEventListener("click", () => {
  vendingTotal += 2;
  totalP.innerHTML = `Total: <strong>$${vendingTotal.toFixed(2)}</strong>`;
});
peanutsBtn.addEventListener("click", () => {
  vendingTotal += 3;
  totalP.innerHTML = `Total: <strong>$${vendingTotal.toFixed(2)}</strong>`;
});
chocolateBtn.addEventListener("click", () => {
  vendingTotal += 4;
  totalP.innerHTML = `Total: <strong>$${vendingTotal.toFixed(2)}</strong>`;
});
gummyBtn.addEventListener("click", () => {
  vendingTotal += 6;
  totalP.innerHTML = `Total: <strong>$${vendingTotal.toFixed(2)}</strong>`;
});

// Make Money
// selectors & variables
const quantityInput = document.querySelector("#quantity");
const whichCoinInput = document.querySelector("#which-coin");
const coinContainer = document.querySelector(".coin-container");
const arrayOfCoins = document.querySelectorAll(".coin");
const makeMoneyForm = document.querySelector(".make-money-form");
const coinTotalDisplay = document.querySelector(".coin-total-display");

let runningTotal = 0;

makeMoneyForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let quantity = quantityInput.value;
  let coin = whichCoinInput.value;

  for (let i = 1; i <= quantity; i++) {
    const coinNode = document.createElement("div");
    coinNode.textContent = coin;
    let coinValue = 0.0;
    switch (coin) {
      case "Penny":
        coinNode.classList.add("coin", "penny");
        coinValue = 0.01;
        break;
      case "Nickel":
        coinNode.classList.add("coin", "nickel");
        coinValue = 0.05;
        break;
      case "Dime":
        coinNode.classList.add("coin", "dime");
        coinValue = 0.1;
        break;
      case "Quarter":
        coinNode.classList.add("coin", "quarter");
        coinValue = 0.25;
        break;

      default:
        break;
    }
    runningTotal += coinValue;
    coinNode.addEventListener("click", () => {
      coinNode.remove();
      runningTotal -= coinValue;

      // text content says "Total: $-0.00" if I add coins and then remove them
      // This if statement solves that
      if (runningTotal <= 0) {
        coinTotalDisplay.textContent = `Total: $0.00`;
      } else {
        coinTotalDisplay.textContent = `Total: $${runningTotal.toFixed(2)}`;
      }
    });
    coinContainer.append(coinNode);
  }
  coinTotalDisplay.textContent = `Total: $${runningTotal.toFixed(2)}`;
  quantityInput.value = null;
  whichCoinInput.value = "";
});

// Light Bulb
// selectors & variables
const onBtn = document.querySelector(".on");
const offBtn = document.querySelector(".off");
const toggleBtn = document.querySelector(".toggle");
const endBtn = document.querySelector(".end");

const lightBulbDisplay = document.querySelector(".light-bulb-display");

onBtn.addEventListener("click", () => {
  lightBulbDisplay.classList.add("bright-mode-bulb");
  document.body.classList.add("bright-mode-body");
});

offBtn.addEventListener("click", () => {
  lightBulbDisplay.classList.remove("bright-mode-bulb");
  document.body.classList.remove("bright-mode-body");
});

toggleBtn.addEventListener("click", () => {
  lightBulbDisplay.classList.toggle("bright-mode-bulb");
  document.body.classList.toggle("bright-mode-body");
});

endBtn.addEventListener("click", () => {
  onBtn.disabled = true;
  offBtn.disabled = true;
  toggleBtn.disabled = true;
  endBtn.disabled = true;
});
