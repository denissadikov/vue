import Vue from 'vue';
import Vuex from 'vuex';
import app from './modules/app';
import account from './modules/account';
import payment from './modules/payment';
import setting from './modules/setting';
import getters from './getters';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    app,
    account,
    payment,
    setting,
  },
  getters,
});

export default store;
