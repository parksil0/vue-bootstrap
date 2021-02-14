import { fetchNewsList,
        fetchAskList, 
        fetchJobsList,
        fetchList,
        fetchUserInfo, 
        fetchAskItem, 
    } from '../api/index.js';

export default {
    // FETCH_NEWS(context) {
    //     return fetchNewsList()
    //         .then(response => {
    //             context.commit('SET_NEWS', response.data);
    //             return response;
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    // },
    async FETCH_NEWS(context) {
        const response = await fetchNewsList();
        context.commit('SET_NEWS', response.data);
        return response;
    },
    // FETCH_ASK({ commit }) {
    //     return fetchAskList()
    //         .then(({ data }) => {
    //             commit('SET_ASK', data);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    // },
    async FETCH_ASK({commit}) {
        const response = await fetchAskList();
        commit('SET_ASK', response.data);
        return response;
    },
    // FETCH_JOBS({ commit }) {
    //     return fetchJobsList()
    //         .then(({ data }) => {
    //             // console.log(data);
    //             commit('SET_JOBS', data);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    // },
    async FETCH_JOBS({commit}) {
        const response = await fetchJobsList();
        commit('SET_JOBS', response.data);
        return response;
    },
    FETCH_USER({ commit }, userName) {
        return fetchUserInfo(userName)
            .then(({ data }) => {
                commit('SET_USER', data)
            })
            .catch(error => {
                console.log(error);
            }) 
    },
    FETCH_ASK_ITEM({ commit }, askItem) {
        return fetchAskItem(askItem)
            .then(({ data }) => {
                commit('SET_ASK_ITEM', data)
            })
            .catch(error => {
                console.log(error);
            }) 
    },
    // FETCH_LIST({ commit }, pageName) {
    //     return fetchList(pageName)
    //         .then(({ data }) => {
    //             commit('SET_LIST', data)
    //             return data;
    //         })
    //         .catch(error => console.log(error));
    // },
    async FETCH_LIST({commit}, pageName) {
        const response = await fetchList(pageName);
        commit('SET_LIST', response.data);
        return response;
    }
}