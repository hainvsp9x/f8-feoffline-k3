var products = [
  {
    id: 1,
    name: "Sản phẩm 1",
    price: 1000,
  },
  {
    id: 2,
    name: "Sản phẩm 2",
    price: 2000,
  },
  {
    id: 3,
    name: "Sản phẩm 3",
    price: 3000,
  },
  {
    id: 4,
    name: "Sản phẩm 4",
    price: 4000,
  },
];

var carts = [];

var count = 0;
products.forEach(function (product) {
  count++;
  const tbody = document.querySelector("tbody");
  const tr = document.createElement("tr");

  const tdOrder = document.createElement("td");
  tdOrder.classList.add("order");
  tdOrder.innerText = count;

  const tdName = document.createElement("td");
  tdName.classList.add("prod-name");
  tdName.innerText = product.name;

  const tdPrice = document.createElement("td");
  tdPrice.classList.add("pro-price");
  tdPrice.innerText = product.price;

  const tdAddCart = document.createElement("td");
  const quantity = document.createElement("input");
  quantity.className = `quantity-${product.id}`;
  quantity.type = "Number";
  quantity.value = 1;

  const btnAddCart = document.createElement("button");
  btnAddCart.innerText = "Thêm và giỏ hàng";
  btnAddCart.className = "btn-add-cart";

  tdAddCart.append(quantity);
  tdAddCart.append(btnAddCart);

  tr.append(tdOrder);
  tr.append(tdName);
  tr.append(tdPrice);
  tr.append(tdAddCart);
  tbody.append(tr);
});

carts.forEach(function (cart) {
  count++;
  const tbody = document.querySelector("tbody");
  const tr = document.createElement("tr");

  const tdOrder = document.createElement("td");
  tdOrder.classList.add("order-cart");
  tdOrder.innerText = count;
});

var addCart = document.querySelector(".btn-add-cart");
addCart.addEventListener("click", function (e) {});
