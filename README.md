# Image Gallery Implementation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).\
UI components were designed and implemented using [Material UI components](https://material-ui.com/).\
[Axios](https://www.npmjs.com/package/axios) is used for API requests and async request handling

## Application architecture overview

The application of a model view based architecture. These are further segregated into the following parts:
### 1) Components

UI components which do not directly posess any states and are used only as presentational entities.

### 2) Containers

Contain the state and perform state transformation and event processing and data transfer to the child components (UI compoments)

### 3) Services

Responsible for API calls and data fetching. (Axios is used by the service as an HTTP client)


## Available Scripts

As a pre-requisite it is necessary to install the dependencies

### `npm install` 

Install the dependencies and get the project ready for launch.

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.

