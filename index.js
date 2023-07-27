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

productsData.forEach(function(productData, index){
  //create card
  let card = document.createElement("div");
  //card should have category and stay hidden initially
  card.classList.add("card", productData.category,  "hide");
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

  document.getElementById("products").appendChild(card);
});

localStorage.setItem("productsData", JSON.stringify(productsData));

// parameter passed from button (parameter same as category)
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if(value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button cklick
    if(value == "all") {
      element.classList.remove("hide");
    } else {
      //check if elements contains category class
      if (element.classList.contains(value)) {
        //display element based on categpry
        element.classList.remove("hide");
      } else {
        element.classList.add("hide");
      }
    }
  });
}

//footer nav active
const currentPage = window.location.pathname.split('/').pop();

switch (currentPage) {
  case 'index.html':
    document.getElementById("home-link").style.color ="#6759ff";
    break;
  case 'cart.html':
    document.getElementById('cart-link').style.color = "#6759ff";
    break;
  case 'profile.html':
    document.getElementById('profile-link').style.color = "#6759ff";
    break;
}

//initially display all products
window.onload = () => {
  filterProduct("all");
};

