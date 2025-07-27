# Ga-linda's Closet

A Wicked-themed store with a wicked good selection of various curioisms, powered by Next.js.

## Quick Start

```shell
nvm use
npm install
npm run dev
```

## Test

This project uses Playwright for E2E testing.

```shell
npm run test
```

VSCode developers can use the Testing panel and recommended extension to run tests interactively.

## Todo

- [x] Scaffold Next.js application
- [x] Serve and fetch items list
- [x] Serve and fetch item detail
- [x] Add Prettier
- [x] Add Playwright E2E test suite
- [x] Style item list page
- [x] Style item detail page

## Developer Notes

This tiny Next.js application was built in 8 hours, and attempts to demonstrate engineering best practices in an Agile environment. My highest priorities were to demonstrate:

- Scaffolding and prototyping a front end application, complete with tools like linting and testing integration for a delightful developer experience.
- Building with end-to-end testing in mind from the beginning. I leverage accessibility selectors like `page.getByRole()` to make the tests resilient against refactor and minor design changes.
- Front end networking. As a result, I chose Next.js route handlers and `fetch` even though this is technically an anti-pattern for the current use case. Next.js leverages server-side rendering patterns that would have been perfect for the current use case.
- Iteration. I "sketch out" high priority items, working through the functional problems before polishing appearance. As I am not a designer, this application looks ugly but demonstrates practical patterns like grid layouts, aspect ratios, CSS variables, etc.

I deprioritized the following items:

- Jest unit testing. Because the UI (components especially) is so volatile at this stage, it provided much more immediate testing value to create functional end-to-end tests.
- Add to cart/checkout feature. This would have been fun but had a high LOE given subfeatures like sidebar, app state, and currency calculations.
