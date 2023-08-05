function borderDisplay() {
  const image = document.querySelector('#image');
  if (image.style.border === "")
      image.style.border = '#ff0000 2px dashed';
  else
      image.style.border = "";
}
function stickersShop() {
  const quantity = document.getElementsByTagName('input');
  let total = 0;
  for (i=0; i < quantity.length; i++){
      total += parseInt(quantity[i].value);
  }
  if (0 < total && total <= 10){
      document.querySelector('#total').textContent = "Llevas " + total + " stickers :)";
  }
  else if (total > 10){
      document.querySelector('#total').textContent = "Llevas demasiados stickers :(";
  }
}
function password() {
  const number1 = document.querySelector('#number1').value;
  const number2 = document.querySelector('#number2').value;
  const number3 = document.querySelector('#number3').value;
  if (number1 === '9' && number2 ==='1' && number3 === '1'){
      document.getElementById('passwordResult').textContent = "Password 1 correcto :D";
  }
  else if (number1 === '7' && number2 ==='1' && number3 === '4'){
      document.getElementById('passwordResult').textContent = "Password 2 es correcto :D";
  }
  else{
      document.getElementById('passwordResult').textContent = "Password es incorrecto :(";
  }
}