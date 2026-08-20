import { mount as productsMount } from "products/ProductsIndex"; // imported from products/src/bootstrap.js
import { mount as cartMount } from "cart/CartDisplay";

console.log("This is the container!");

productsMount(document.querySelector("#container-products"));
cartMount(document.querySelector("#container-cart"));
