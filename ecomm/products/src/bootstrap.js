import faker from "faker";

// mount is an arbitrary name. the function renders a list of products populated by faker
const mount = (element) => {
  let products = "";

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  element.innerHTML = products;
};

if (process.env.NODE_ENV === "development") {
  const element = document.querySelector("#dev-products");
  // Assuming container doesn't have an element with the above id
  if (element) {
    // Products app is likely running in isolation (not through container app)
    mount(element);
  }
}

export { mount }; // Export so container app can use mount

// Situation 1: File is being run in development in isolation. Local index.html is being used. It has an element with proper id assigned. It's fine to immediately render the app into that element.
// Situation 2: File is being run in development or production through the container app. (Container app's index.html is different from local index.html.) No guarantee of element with proper id. Therefore, don't immediately render the app.
