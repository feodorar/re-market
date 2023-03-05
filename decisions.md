# Frameworks & Principles

### Angular

- SPA (industry standard, responsive UX)
- well known, stable
- skill in team -> fast

#### NGRX

- separation of concerns (components for viewing data, ngrx store for handling data/logic)
- data easily accessible from everywhere without the need to pass it from comp to comp
- makes tracing problems & debugging very easy
- nice for optimistic state updates
- separate view and domain model
- maybe unnecessarily complicated for this small app, observable services probably would work just as well

#### OpenAPI, Prism & Wiremock

- generators reduce boilerplate code
- mocks help decouple frontend & backend implementation

#### Cypress

- for e2e testing
- very readable assertions

### Other Principles

- structured in feature modules (auth, offer-list, offer-details)
- encapsulate everything that is used more than once (e.g. vote comp)
