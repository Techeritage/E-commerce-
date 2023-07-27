var urlParams = new URLSearchParams(window.location.search);
var cardIndex = urlParams.get("card");

var productsData = JSON.parse(localStorage.getItem("productsData"));

var cardDetails = productsData[cardIndex];

var regina = cardDetails.productName;

document.getElementById("img").src = cardDetails.image;
document.getElementById("heading").textContent = regina;
document.getElementById("heading2").textContent = regina;
document.getElementById("category").textContent = cardDetails.category;
document.getElementById("avail").textContent = cardDetails.avail;
document.getElementById("cost").textContent = "$" + cardDetails.price;

document.getElementById("brand").textContent = cardDetails.brand;

