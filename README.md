# Image Gallery Implementation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
UI components were designed and implemented using Material UI components

## Application architecture overview

The application of a model view based architecture. These are further segregated into the following parts:
1) Components - These are the UI components. They do not directly manipulate any states and only presentational entities.
2) Containers - Containers contain the state and are responsible for state transformation and event processing and passing the appropriate data to the child components (UI compoments)
3) Services - Services are responsible for API calls and data fetching. (Axios is used by the service as an HTTP client)


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
