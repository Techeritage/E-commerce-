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