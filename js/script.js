if (localStorage.getItem("cart")) {
  const cart = JSON.parse(localStorage.getItem("cart"));
  let shopCart = new Cart(cart);
  drowCartTable();

  document.querySelector(".cart-out").addEventListener("click", (event) => {
    let target = event.target;
    let article = target.dataset["articul"];

    if (target.classList.contains("plus")) {
      shopCart.goodsPlus(article);
      drowCartTable();
    } else if (target.classList.contains("minus")) {
      shopCart.goodsMinus(article);
      drowCartTable();
    } else if (target.classList.contains("delete")) {
      shopCart.goodsDelete(article);
      drowCartTable();
    }
  });

  function drowCartTable() {
    document.querySelector(".cart-out").innerHTML = "";
    document.querySelector(".cart-out").innerHTML = shopCart.render();
    localStorage.setItem("cart", JSON.stringify(shopCart.items));
  }
}
