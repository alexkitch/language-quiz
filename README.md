# Introduction

This is a sample React application to assess English language skills. It allows the user to take a test conforming to one of two basic flows, and see their results at the end.

-   The first user flow iterates through all the questions and then, when all
    questions have been answered displays the score to the user
-   The second user flow iterates through multiple sets of questions so that, when
    each set of questions have been answered the user is prompted to &quot;take the
    next round&quot;. When all rounds have been answered, the user is given the score
    screen.

The application is built using React and is written in TypeScript. It uses React Query for data fetching,
Tailwind CSS for styling, and Prettier for code formatting.

# Getting Started

-   Clone the repository
-   Run `npm install` to install dependencies
-   Run `npm run dev` to start the development server

Alternatively, this sample application is deployed at

# Testing

-   Run `npm run test` to run the test suite
-   Run `npm run test-ui` to run the test suite in UI mode

# Improvements

This application was built relatively quickly and is, by no means, production ready. In particular, the `Activity` and `Round` components are larger and more complex than I'd like them to be - given a bit more time I'd like to break those down into smaller components and make them a bit more reusable. I'd also like to add more tests to cover the different flows.

CSS styling is pretty basic and designed to conform to a basic wireframe, without much additional imagination. If styling was a bigger concern, it would be nice to build this out as a fancier responsive web app using Tailwind's breakpoints.
