import { fetchNewsList,
        fetchAskList, 
        fetchUserInfo, 
        fetchAskItem 
    } from '../api/index.js';

export default {
    FETCH_NEWS(context) {
        fetchNewsList()
            .then(response => {
                console.log(response.data);
                context.commit('SET_NEWS', response.data);
            })
            .catch(error => {
                console.log(error);
            })
    },
    FETCH_ASK({ commit }) {
        fetchAskList()
            .then(({ data }) => {
                commit('SET_ASK', data);
            })
            .catch(error => {
                console.log(error);
            })
    },
    FETCH_USER({ commit }, userName) {
        fetchUserInfo(userName)
            .then(({ data }) => {
                commit('SET_USER', data)
            })
            .catch(error => {
                console.log(error);
            }) 
    },
    FETCH_ASK_ITEM({ commit }, askItem) {
        fetchAskItem(askItem)
            .then(({ data }) => {
                commit('SET_ASK_ITEM', data)
            })
            .catch(error => {
                console.log(error);
            }) 
    }
}