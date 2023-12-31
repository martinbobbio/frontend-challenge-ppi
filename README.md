<h1 align="center">
  <br>
  <img src="https://raw.githubusercontent.com/martinbobbio/frontend-challenge-ppi/master/public/favicon.svg" width="200">
  <br>
  <br>
  <a href="https://frontend-challenge-ppi.vercel.app/">
  Challenge PPI - Frontend
  </a>
  <br>
  <br>
</h1>
<br>

## Description

This project is a frontend application developed using React with TypeScript and ViteJS. It includes a important view: where you can check the changes in some currencies. The application fetches data from a VATCOMPLY API.

## Getting started

1. Clone the repository:

```bash
git clone https://github.com/martinbobbio/frontend-challenge-ppi
```

2. Install depencencies

```bash
npm install
```

3. Optional: Create a .env file in the root directory of the project and add the following environment variables:

```plaintext
VITE_API_URL=<api-url>
```

Replace <api-url> with the URL of VATCOMPLY API (https://api.vatcomply.com/).

4. Start the development server:

```bash
npm run dev
```

5. Open your browser and access the application at http://localhost:3000.

## Libreries used

### Axios

- For fetching information to the API

### SWR

- To better manage requests and have control over their status, in addition to caching information

### DayJS

- For a better way to use dates

### MUI

- To use nice components and fast development

### Styled Components

- For addings styles and reutilication of components

### Big Number

- Very importanto for working with small or big numbers

## Scripts

- `npm run dev`: Starts the development server using Vite.
- `npm run build`: Builds the application for production.
- `npm run lint`: Runs ESLint to lint the source code.
- `npm run preview`: Builds and previews the production-ready application.
- `npm run test`: Check unit tests.
