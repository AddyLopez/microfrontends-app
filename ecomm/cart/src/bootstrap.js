import faker from "faker";

const mount = (element) => {
  const cartMessage = `<div>You have ${faker.random.number()} items in your cart.</div>`;

  element.innerHTML = cartMessage;
};

if (process.env.NODE_ENV === "development") {
  const element = document.querySelector("#dev-cart");
  // Assuming container doesn't have an element with the above id
  if (element) {
    // Cart app is likely running in isolation (not through container app)
    mount(element);
  }
}

export { mount }; // Export so container app can use mount

// Situation 1: File is being run in development in isolation. Local index.html is being used. It has an element with proper id assigned. It's fine to immediately render the app into that element.
// Situation 2: File is being run in development or production through the container app. (Container app's index.html is different from local index.html.) No guarantee of element with proper id. Therefore, don't immediately render the app.
