import axios from 'axios';

const defaultConfig = {
  baseUrl: `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_PATH_PREFIX}`,
  timeout: 1000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};
const api = axios.create(defaultConfig);

const Api = {
  API_CALL: 'API_CALL',

  catchError: error => {
    return error.response.data;
  },

  delete: (path, config = defaultConfig) => {
    const request = api.delete(path, config);
    request.catch(Api.catchError);
    return request;
  },

  get: (path, params = {}, config = defaultConfig) => {
    const request = api.get(path, { ...config, params });
    request.catch(Api.catchError);
    return request;
  },

  patch: (path, body, config = defaultConfig) => {
    const request = api.patch(path, body, config);
    request.catch(Api.catchError);
    return request;
  },

  post: (path, body, config = defaultConfig) => {
    const request = api.post(path, body, config);
    request.catch(Api.catchError);
    return request;
  },

  put: (path, body, config = defaultConfig) => {
    const request = api.put(path, body, config);
    request.catch(Api.catchError);
    return request;
  },
};

export default Api;
