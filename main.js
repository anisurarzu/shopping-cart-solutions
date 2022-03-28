/* const plusQuantity=(params) =>{
    
} */
// plus item
/* function plusQuantity() {
  const number = document.getElementById("iphone-number").value;
  var newNumber = parseInt(number);
  newNumber++;
  document.getElementById("iphone-number").value = newNumber;
  console.log(newNumber);
} */

// minus item

/* function minusQuantity() {
  const number = document.getElementById("iphone-number").value;
  var newNumber = parseInt(number);
 if(newNumber>0){
      newNumber--;
 }
  document.getElementById("iphone-number").value = newNumber;
  console.log(newNumber);
}
 */
function quantityUpDown(item) {
const number = document.getElementById("iphone-number").value;
  var newNumber = parseInt(number);
  if(item==='plus'){
  
    newNumber++;
    price('plus');
   
  }
  else{
       if (newNumber > 0) {
         newNumber--;
          price('minus')
       }
      
  }

  document.getElementById("iphone-number").value = newNumber;
  console.log(newNumber);

  

}

/* function price() {
  var price = document.getElementById("iphone-total").innerText;

  var newPrice = parseInt(price);
  var finalPrice = newPrice + 1219;
 
   document.getElementById("iphone-total").innerText=finalPrice;

}

function priceDec() {
  var price = document.getElementById("iphone-total").innerText;

  var newPrice = parseInt(price);
  var finalPrice = newPrice - 1219;

  document.getElementById("iphone-total").innerText = finalPrice;
} */



function price(item) {
  var price = document.getElementById("iphone-total").innerText;

if(item==='plus'){
    var newPrice = parseInt(price);
    var finalPrice = newPrice + 1219;
}
else{
    var newPrice = parseInt(price);
    var finalPrice = newPrice - 1219;
}

  document.getElementById("iphone-total").innerText = finalPrice;
}