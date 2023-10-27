const datas = [
  {
    id: 1,
    name: "WD 2TB Elements Portable External Hard Drive - USB 3.0",
    price: 20,
    firm: "electronics",
    vote: 3.4,
    img: "./img/ssd.jpg",
  },
  {
    id: 2,
    name: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    price: 30,
    firm: "electronics",
    vote: 3.4,
    img: "./img/ssd-wd1.jpg",
  },
  {
    id: 3,
    name: "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    price: 25,
    firm: "electronics",
    vote: 1.4,
    img: "./img/monitor01.jpg",
  },
  {
    id: 4,
    name: "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    price: 25,
    firm: "electronics",
    vote: 2.4,
    img: "./img/monitor02.jpg",
  },
  {
    id: 5,
    name: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    price: 25,
    firm: "electronics",
    vote: 4.4,
    img: "./img/ssd-wd1.jpg",
  },
  {
    id: 6,
    name: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen",
    price: 25,
    firm: "electronics",
    vote: 3.4,
    img: "./img/monitor01.jpg",
  },
];

const products = document.querySelector(".list-product");
// datas.forEach((data) => {
//   //   console.log(data.name);
//   products.innerHTML = `
//     <div class="product-item">
//     <img src="${data.img}" alt="" />
//     <h2 class="description">
//       ${data.name}
//     </h2>
//     <div class="vote">
//       <p>electronics</p>
//       <p>${data.vote} <i class="fa-solid fa-star"></i></p>
//     </div>
//     <div class="price">$${data.price}</div>
//     <div class="cart">
//       <button class="add-cart">Add to cart</button>
//       <button class="buy">Buy now</button>
//     </div>
//   </div>
//     `;
// });
products.innerHTML = datas.map((data) => {
  return `
    <div class="product-item">
    <div class= "image">
        <img src="${data.img}" alt="" />
        </div>
        <h2 class="description">
        ${data.name}
        </h2>
        <div class="vote">
        <p>electronics</p>
        <p>${data.vote} <i class="fa-solid fa-star"></i></p>
        </div>
        <div class="price">$${data.price}</div>
        <div class="cart">
        <button class="add-cart">Add to cart</button>
        <button class="buy">Buy now</button>
        </div>
    </div>
    `;
});
