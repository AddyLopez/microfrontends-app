import { mount } from "products/ProductsIndex"; // imported from products/src/bootstrap.js
import "cart/CartDisplay";

console.log("container");

mount(document.querySelector("#container-products"));
