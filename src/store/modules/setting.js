import {
  getSections, getData, setSectionComponent, setSectionDetail,
} from '../../api/setting';

/* eslint-disable */

const setting = {
  state: {
    sections: null,
    components: null,
  },
  mutations: {
    SET_SECTIONS: (state, items) => {
      state.sections = items;
    },
    SET_ACT_DATA: (state, items) => {
      state.sections = items.sections;
      state.components = items.components;
      state.details = items.details;
    },
  },

  actions: {
    GetSections({ commit }, data) {
      return (async () => getSections(data))();
    },
    GetData({ commit }, data) {
      return (async () => getData(data))();
    },
    SetSectionComponent({ commit }, data) {
      return (async () => setSectionComponent(data))();
    },
    SetSectionDetail({ commit }, data) {
      return (async () => setSectionDetail(data))();
    },
  },
};

export default setting;
