# microfrontends-app

## Description

An e-commerce app built with NodeJS, JavaScript, Webpack, and HTML to learn how to build microfrontends.

The entire application integrates two independent, or remote, front-end applications--products and cart--within an encapsulating container, or host, front-end application at run-time. The emphasis is on higher-order questions of architectural structure and design, not on questions of visual style or content; that is, on the _how_ not the _what_. Accordingly, the app is not concerned with implementing the intricate functionality of an e-commerce app for a user. It is concerned with the internal organization of the code and on how all the parts relate to the whole, with the e-commerce content serving chiefly as a plausible use case for such an approach.

## Usage

To run the program locally, spin up servers in three separate terminals from the products, cart, and container directories (which map respectively to localhost 8080, 8081, and 8082) by running the command _npm start_.

## Learning Objectives Attained

- To gain a better conceptual and practical understanding of how and why to implement microfrontends architecture.
- To build the architecture with an informed understanding of the tradeoffs between build-time and run-time integrations.
- To simulate how different development teams might be assigned to separate apps (e.g. products, cart, or container) in a real-life production environment.
- To learn how to configure Webpack's HTML and Module Federation plugins in order to integrate remote microfrontends within a host container app while simultaneously maintaing the independence and integrity of remote microfrontends.
- To practice debugging errors frequently encountered when using Webpack and when building microfrontends.
- To learn how to refactor shared dependencies across microfrontend apps and debug problems arising from shared dependencies with different version numbers installed.

### Secondary Technologies & Techniques

Webpack Module Federation (plugin), Webpack HTML plugin, Diagrams.net (for visualizing microfrontends architecture), zsh (command line), Google Chrome Developer Tools Network tab monitoring while testing functionality, shared dependencies, and independence or integration of microfrontend apps, Faker (to populate fake data), asynchronous script loading via import function calls, conditional rendering of content based on an environment variable,

### Course Attribution

This learning project was instructed by Stephen Grider in his course [Microfrontends with React: A Complete Developer's Guide](https://www.udemy.com/course/microfrontend-course/?couponCode=CP260817G1).
