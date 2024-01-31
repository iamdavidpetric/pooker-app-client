import localStorage from 'redux-persist/es/storage';

const localConfig = {
  key: 'pooker-app-client',
  storage: localStorage,
  blacklist: [],
  timeout: null,
};

export { localConfig };
