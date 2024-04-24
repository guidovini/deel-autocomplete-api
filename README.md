# deel-autocomplete-api

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Description

REST API repo for my Deel Autocomplete app. Made with Node and NestJS.

## Data

Returns 40 different companies with this structure:

```js
export class Company {
  id: string;
  label: string;
  industry: string;
  city: string;
  employees: string;
  revenue: string;
  website: string;
}
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

Nest is [MIT licensed](LICENSE).
