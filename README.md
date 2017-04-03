# Customer Form App

This Angular 2 project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0. Due to time constraints, it retains a number of legacy files and dependencies that could be purged.

This project is minimally styled, but I _am_ a style guru! For samples of my front end work, please see:
 - http://www.hackreactor.com/
 - https://admissions.hackreactor.com/steps/1

## Development server

Run `ng serve` for a dev server at `http://localhost:4200/`. The app utilized live reload if for any source files.

## App Layout
- App -- layout, module imports, declarations, providers and bootstrapping
- Components -- Merchant Form
- Merchant-Service -- HTTP, mock data

## Web Service API
https://sample-order-service.herokuapp.com/orders-data/

##TODOs
- Increase specificity & robustness of tests
- Pull from shippingOptions, dimensions, materials at load (eventually over server)
- Pull from subsets shippingOptions, dimensions, materials as move through selections
- Calculate shipping costs, shipping costs (do this client side) as user orders
- Use precompiler for styles. Set styles-global folder with styles vars & utils. Break remaining styles into importable components.
- Standardize BEM classing conventions (allows porting into multiple contexts seamlessly)

- -->(Moving towards websockets): check for status updates (on DB) on load. Setup webhooks that can be called when a step is completed while user is logged on.


## Unit tests setup

AppComponent test written. Else, TODO. Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## End-to-end test setup

TODO. Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Must be serving the app via `ng serve`.

## Bitmap test setup

TODO Run `ng ` to execute bitmap & regression tests via [Backstop](https://github.com/garris/BackstopJS).
Must be serving the app via `ng serve`.(.js)

## Compatibility Testing

TODO -- Initially: manually test via [Browserstack](https://www.browserstack.com/)
Possibly upgrade to automation testing, e.g., via [Cucumber](https://github.com/cucumber/cucumber-js)

## CI

TODO: Run tests w/ Travis || Circle CI
