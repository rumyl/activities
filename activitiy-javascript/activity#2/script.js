function maskCardNumber() {
  var input = document.getElementById("cardNumberInput");
  var value = input.value;
  var numericValue = value.replace(/\D/g, "");

    if (numericValue.length < 16) {
      alert("Card number should be 16 digits long.");
      return;
    }
    else if(numericValue.length > 16) {
      alert("Card number should not exceed 16 digits.");
      return;
    }
    else{
    
      var firstFour = numericValue.slice(0, 4);
      var lastFour = numericValue.slice(-4);
      var maskedNumber = firstFour + " *".repeat(8) + " " + lastFour;
      var cardLabel = document.getElementById("cardLabel");
      cardLabel.textContent = "Masked Card Number: " + maskedNumber;
    }

 
}

function unmaskCardNumber() {
  var input = document.getElementById("cardNumberInput");
  var value = input.value;


  var numericValue = value.replace(/\D/g, "");

    if (numericValue.length < 16) {
      alert("Card number should be 16 digits long.");
      return;
    }
    else if(numericValue.length > 16) {
      alert("Card number should not exceed 16 digits.");
      return;
    }
    else{

      var unmaskedNumber = numericValue.replace(/(.{4})/g, "$1 ");
      var cardLabel = document.getElementById("cardLabel");
      cardLabel.textContent = "Unmasked Card Number: " + unmaskedNumber;
    }
}