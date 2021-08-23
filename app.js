//update phone number
function updateItemNumber(item, isAdd, price) {
  const itemInput = document.getElementById(item + "-number");
  let itemNumber = parseInt(itemInput.value);
  if (isAdd == true) {
    itemNumber = itemNumber + 1;
  } else if (itemNumber > 0) {
    itemNumber = itemNumber - 1;
  }
  itemInput.value = itemNumber;
  //update phone total
  const itemTotal = document.getElementById(item + "-total");
  itemTotal.innerText = itemNumber * price;
  // calculate total
  calculateTotal();
}

function getInputValue(itemId) {
  const itemInput = document.getElementById(itemId);
  const itemNumber = parseInt(itemInput.value);
  return itemNumber;
}
function calculateTotal() {
  const phoneTotal = getInputValue("iphone-number") * 1219;
  const caseTotal = getInputValue("case-number") * 59;
  const subTotal = phoneTotal + caseTotal;
  const taxAmount = subTotal / 10;
  const totalPrice = subTotal + taxAmount;
  //update on the html
  console.log(subTotal);
  document.getElementById("sub-total").innerText = subTotal;
  document.getElementById("tax-amount").innerText = taxAmount;
  document.getElementById("total-amount").innerText = totalPrice;
}

// handle phone increase decrease events
//increase phone item
document
  .getElementById("iphone-plus-button")
  .addEventListener("click", function () {
    updateItemNumber("iphone", true, 1219);
  });
// decrease iphone item
document
  .getElementById("iphone-minus-button")
  .addEventListener("click", function () {
    updateItemNumber("iphone", false, 1219);
  });
// handle case increase decrease events
//increase
document
  .getElementById("case-plus-button")
  .addEventListener("click", function () {
    updateItemNumber("case", true, 59);
  });
//decrease
document
  .getElementById("case-minus-button")
  .addEventListener("click", function () {
    updateItemNumber("case", false, 59);
  });
