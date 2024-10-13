# A quiz app

A basic quiz application, building a quiz from a selected number of questions randomly pulled from a small pool.

The application is deployed to Github Pages here - (https://joeharper85.github.io/cint-tech-test)

### Running locally
Clone this repo and run

```npm install```

```npm run dev```

Tests are executed via

```npm run test```

## Architecture

### Technologies used

- **React/Vite** The aplication is built in React and Vite
- **React Router** Providing routing via a datarouter
- **React Query** Management of data retrieived from 'api'
- **HeadlessUI** Headless components with built in accesibility
- **TailwindCSS** Styling via utility classes
- **DaisyUI** Theming and useful tailwind shothands for commonly used components
- **Vitest and React Testing Library** Unit testing in Vite/React - note that tests are a minimal token effort for this demo application
- **Lodash and Html-Entities** some basic utility functions
- **Github Actions/Github Pages** CI and deployment

### Observations
- It would be interesting if given a larger pool of questions to add a custom quiz builder which allows choice of category/difficulty
- Github Pages isn't really designed for SPAs, so trying to directly access any of the routes or refreshing causes a 404. This would be solved by hosting somewhere else but Github Pages is free and readily available
