var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 const itemPrice = Math.floor((Math.random() * 100) + 1);
 cart.push({[item]: itemPrice});
 console.log(item + " has been added to your cart.")
 return cart;
}

function viewCart() {
  // write your code here
  if(cart.length === 0){
    return console.log("Your shopping cart is empty.")
  } else {
    if(cart.length === 1){
      
    }
  }
}

function total(sum) {
  // write your code here
  sum = 0;
  for(var i = 0; i < cart.length; i++){
    for(var item in cart[i]){
    sum += cart[i][item];
    }
  }
  return sum;
}

function removeFromCart(item) {
  // write your code here
  var itemInCart = false;

  for (let i = 0, l = cart.length; i < l; i++) {
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true;
      cart = cart.slice(0, i).concat(cart.slice(i + 1));
      l--;
    }
  }
  if (!itemInCart) {
    console.log("That item is not in your cart.");
  }
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  if(!cardNumber){
    console.log("Sorry, we don't have a credit card on file for you.");
    return false;
  }
  console.log("Your total cost is $" + total() + ", which will be charged to the card " + cardNumber + ".")
  cart = [];
}
