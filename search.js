const urlParam = new URLSearchParams(window.location.search);
const query = urlParam.get("query");

document.getElementById("searchQuery").textContent = "search Result: " + query;

let productsData = [
  {
    productName: "Regular red T-shirt",
    category: "Topwear",
    price: "30",
    image: "top-wear.jpeg",
    brand: "Gucci",
    avail: "In stock"
  },
  {
    productName: "Light blue Baggy trouser",
    category: "Bottomwear",
    price: "49",
    image: "bottom-wear.jpeg",
    brand: "Gucci",
    avail: "In stock"
  },
  {
    productName: "Casio Smartwatch",
    category: "Watch",
    price: "99",
    image: "watch.jpeg",
    brand: "Gucci",
    avail: "In stock"
  },
  {
    productName: "Classic T-shirt",
    category: "Topwear",
    price: "99",
    image: "top-wear1.jpeg",
    brand: "Gucci",
    avail: "Out of stock"
  },
  {
    productName: "Stylish red jacket",
    category: "Jacket",
    price: "109",
    image: "jacket.jpeg",
    brand: "Gucci",
    avail: "In stock"
  },
  {
    productName: "Green classic trouser",
    category: "Bottomwear",
    price: "129",
    image: "bottom-wear1.jpeg",
    brand: "Gucci",
    avail: "In stock"
  },
  {
    productName: "Stylish green jacket",
    category: "Jacket",
    price: "109",
    image: "jacket1.jpeg",
    brand: "Gucci",
    avail: "Out of stock"
  }
];

const resultsContainer = document.getElementById("products");

productsData.forEach(function(productData, index){
  //create card
  let card = document.createElement("div");
  //card should have category and stay hidden initially
  card.classList.add("card", productData.category, "hide");
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //img tag
  let image = document.createElement("img");
  image.src = productData.image;
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = productData.productName.toUpperCase();
  container.appendChild(name);
  // price
  let price = document.createElement("h6");
  price.innerText = "$" + productData.price;
  container.appendChild(price);
  card.appendChild(container);

  card.addEventListener("click", function() {
    window.location.href = "details.html?card=" + index;
  });

  resultsContainer.appendChild(card);
});

let elements = document.querySelectorAll(".product-name");
let cards = document.querySelectorAll(".card");
    
elements.forEach((element, index) => {
  //check if text includes the search value
  if (element.innerText.includes(query.toUpperCase())) {
    //display matching card
    cards[index].classList.remove("hide");
  } else {
    //hide others
    cards[index].classList.add("hide");
  }
});

localStorage.setItem("productsData", JSON.stringify(productsData));







