# uk-tube-line-status

A simple single page application which shows the current tube line status, by consuming TFL unified-api and GOV.UK Design System

## Demo

https://lijo-tube-status-react.web.app

## Prerequisites

1. Nodejs v20.11.1
2. Yarn globally

## Run the application in your local

1. Change the API key in `.env`
   - To get the api key
   1. First subscribe the Line API (https://api-portal.tfl.gov.uk/product#product=2357355709892)
   2. Then take Primary key from the https://api-portal.tfl.gov.uk/profile

### Run the application

1. `cd app`
2. `yarn install`
3. `yarn run dev`

- The local dev server will be available on 5173 port - http://localhost:5173/
- If you want to access it in mobile with the same network http://192.168.1.178:5173

## Other commands

1. To run the application in production mode in dev
   `yarn run build`
   `yarn run preview`

2. To run the unit test cases
   `yarn run test`

3. To get the test coverage
   `yarn run coverage`

4. To build the production artifacts
   `yarn run build`
   By default, the build output will be placed at dist.

## Assumptions

1. API will return http 200 status code for valid response
2. Application is only for UK country , lang="en-GB"
3. statusSeverity in the api response will be ascending order, means less statusSeverity need to list first
4. lineStatuses array will always contains one single element . using the first elemnt in the array as current status

## External libraries

1. vite - Vite is a build tool (https://vitejs.dev/guide/ , https://vitejs.dev/guide/why.html)
2. typescript - https://www.npmjs.com/package/typescript
3. sass - A pure JavaScript implementation of
4. jest - JavaScript Testing library
5. react testing library - Testing APIs for working with React components.
6. govuk-frontend - GOV.UK Frontend (css utility classes)

## Screenshots

### laptop view

![laptop view](https://github.com/lijoejohn/uk-tube-line-status-react-app/blob/main/screenshots/laptop.png?raw=true)

### mobile view

![mobile view](https://github.com/lijoejohn/uk-tube-line-status-react-app/blob/main/screenshots/mobile.png?raw=true)

### expanded view

![expanded view](https://github.com/lijoejohn/uk-tube-line-status-react-app/blob/main/screenshots/expanded-view.png?raw=true)

### accessibility check

![accessibility check](https://github.com/lijoejohn/uk-tube-line-status-react-app/blob/main/screenshots/accessibility.png?raw=true)

### lighthouse score

![lighthouse score](https://github.com/lijoejohn/uk-tube-line-status-react-app/blob/main/screenshots/lighthouse.png?raw=true)

### unit test

![unit-test](https://github.com/lijoejohn/uk-tube-line-status-react-app/blob/main/screenshots/unit-test.png?raw=true)

### test coverage

![coverage](https://github.com/lijoejohn/uk-tube-line-status-react-app/blob/main/screenshots/coverage.png?raw=true)
