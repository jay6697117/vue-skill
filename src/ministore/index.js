import Vue from 'vue';

export const store = Vue.observable({
  userinfo: {}
});

export const mutations = {
  setUserinfo(userinfoParam) {
    store.userinfo = userinfoParam;
  }
};
