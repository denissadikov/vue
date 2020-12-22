const payment = {
  state: {
    payment: {
      sum: null,
      accountId: null,
      accountXml: null,
      tszhId: null,
      name: null,
    },
  },

  mutations: {
    SET_PAYMENT_INFO: (state, data) => {
      console.log(data);
      state.payment = data;
    },
  },

  actions: {
  },
};

export default payment;
