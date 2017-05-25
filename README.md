# stockfolio-client 
[![Build Status](https://travis-ci.org/leevilehtonen/stockfolio-client.png?branch=master)](https://travis-ci.org/leevilehtonen/stockfolio-client)
[![Dependency Status](https://david-dm.org/leevilehtonen/stockfolio-client.svg)](https://david-dm.org/leevilehtonen/stockfolio-client)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)



Node web app for managing your stock portfolio (client)

- [Help](docs/HELP.md) - create-react-app user guide
- [Components](docs/COMPONENTS.md) - more information about react components used


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

- [Node.js](https://nodejs.org/) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
- [Stockfolio-server](https://github.com/leevilehtonen/stockfolio-server) - Backend for stockfolio server running either locally or at some host


### Installing

A step by step series of examples that tell you have to get a development env running

```sh
git clone https://github.com/leevilehtonen/stockfolio-client.git //or with ssh
cd stockfolio-client
npm install
npm start // runs project in development mode in local development server
```

NOTE: To be able to connect to your own stockfolio-server you need to change API_URI variable at /utils/api.js depending on your server adress

```
npm run build // creates production build
```

## Running the tests

```sh
npm install
npm test
```

## Deployment

For building production ready app:
```sh
npm install
npm run build 
```

If you want to deliver your own copy of stockfolio, it's very easy to serve at Firebase, see more docs at firebase website


## Built With

### Dependencies

- [bootstrap](https://github.com/twbs/bootstrap): The most popular front-end framework for developing responsive, mobile first projects on the web.
- [chart.js](https://github.com/chartjs/Chart.js): Simple HTML5 charts using the canvas element.
- [history](https://github.com/ReactTraining/history): Manage session history with JavaScript
- [jwt-decode](https://github.com/auth0/jwt-decode): Decode JWT tokens, mostly useful for browser applications.
- [prop-types](https://github.com/reactjs/prop-types): Runtime type checking for React props and similar objects.
- [randomcolor](https://github.com/davidmerfield/randomColor): For generating attractive random colors
- [react](https://github.com/facebook/react): React is a JavaScript library for building user interfaces.
- [react-addons-css-transition-group](https://github.com/facebook/react): This package is deprecated and will no longer work with React 16+. We recommend you use `CSSTransitionGroup` from [`react-transition-group`] **Needed for reactstrap**(https://github.com/reactjs/react-transition-group) instead.
- [react-addons-transition-group](https://github.com/facebook/react): This package is deprecated and will no longer work with React 16+. We recommend you use `TransitionGroup` from [`react-transition-group`] **Needed for reactstrap**(https://github.com/reactjs/react-transition-group) instead.
- [react-alert](https://github.com/schiehll/react-alert): A simple react alert component
- [react-chartjs-2](https://github.com/gor181/react-chartjs-2): react-chartjs-2
- [react-dom](https://github.com/facebook/react): React package for working with the DOM.
- [react-redux](https://github.com/reactjs/react-redux): Official React bindings for Redux
- [react-router-dom](https://github.com/ReactTraining/react-router): DOM bindings for React Router
- [react-router-redux](https://github.com/ReactTraining/react-router): Redux bindings for React Router
- [reactstrap](https://github.com/reactstrap/reactstrap): React Bootstrap 4 components
- [redux](https://github.com/reactjs/redux): Predictable state container for JavaScript apps
- [redux-thunk](https://github.com/gaearon/redux-thunk): Thunk middleware for Redux.
- [validator](https://github.com/chriso/validator.js): String validation and sanitization

### Dev Dependencies

- [react-docgen-readme](https://github.com/vieron/react-docgen-readme): CLI tool that extracts information from React Components using react-docgen, transforms that information into Markdown and adds it to your README file.
- [react-scripts](https://github.com/facebookincubator/create-react-app): Configuration and scripts for Create React App.


## Contributing

Make merge ready PR or contact me with feature suggestions.

## Authors

* **Leevi Lehtonen** - *Initial work* - [LeeviLehtonen](https://github.com/leevilehtonen)

See also the list of [contributors](https://github.com/leevilehtonen/stockfolio-client/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgments




