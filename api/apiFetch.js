import { object } from 'prop-types';

const url = 'http://localhost:9300/api';
// const url = '/api1';

export class ApiErrors {
  errors = [];

  constructor(errors) {
    this.errors = errors;
  }

  get errorPerField() {
    return this.errors.reduce((acc, error) => {
      return { ...acc, [error.field]: error.message };
    }, {});
  }
}

export async function apiFetch(endPoint, options = {}) {
  options = {
    headers: new Headers({
      Accept: 'application/json'
    }),
    ...options
  };

  if (
    options.body !== null &&
    typeof options.body === 'object' &&
    !(options.body instanceof FormData)
  ) {
    options.body = JSON.stringify(options.body);
    options.headers.append('Content-Type', 'application/json');
  }

  const response = await fetch(url + endPoint, options);

  if (response.status === 204) {
    return null;
  }

  const responseData = await response.json();
  console.log('response', response);
  console.log('responseData', responseData);
  if (response.ok) {
    return responseData;
  } else {
    if (responseData.errors) {
      throw new Error(responseData.errors);
    }
  }
}
