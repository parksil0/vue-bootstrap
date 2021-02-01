import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions.js';
import mutations from './mutations.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    getters: {
        fetchedAsk(state) {
            return state.ask;
        },
        fetchedAskItem(state) {
            return state.askItem;
        }
    },
    state: {
        news: [],
        ask: [],
        user: {},
        askItem: {},
    },
    mutations,
    actions,
})