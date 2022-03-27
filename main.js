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
    if (newNumber > 0) {
    newNumber++;
    }
  }
  else{
       if (newNumber > 0) {
         newNumber--;
       }
  }

  document.getElementById("iphone-number").value = newNumber;
  console.log(newNumber);

}