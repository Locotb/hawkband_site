import { createStore } from 'vuex';
import table from './modules/table.js';

const store = createStore({
  modules: {
      table
  }
});

export default store;