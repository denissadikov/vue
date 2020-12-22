const getters = {
  ready: (state) => state.app.ready,
  isPortrait: (state) => state.app.isPortrait,
  isMobile: (state) => state.app.isMobile,
  showMobileNav: (state) => state.app.showMobileNav,
  windowWidth: (state) => state.app.windowWidth,
  scrollY: (state) => state.app.scrollY,
  webp: (state) => state.app.webp,
  token: (state) => state.account.token,
  user: (state) => state.account.user,
  popup: (state) => state.app.popup,
  payment: (state) => state.payment.payment,
  setting: (state) => state.setting,
};

export default getters;
