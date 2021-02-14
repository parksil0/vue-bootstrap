import axios from 'axios';

const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
}

function fetchNewsList() {
    return axios.get(`${config.baseUrl}news/1.json`);
}

async function fetchAskList() {
    try {
        return await axios.get(`${config.baseUrl}ask/1.json`);    
    } catch (error) {
        console.log(error);
    }
}

function fetchJobsList() {
    return axios.get(`${config.baseUrl}jobs/1.json`);
}

function fetchList(pageName) {
    // console.log(pageName);
    return axios.get(`${config.baseUrl}${pageName}/1.json`);
}

function fetchUserInfo(username) {
    return axios.get(`${config.baseUrl}user/${username}.json`);
}

function fetchAskItem(askItem) {
    return axios.get(`${config.baseUrl}item/${askItem}.json`);
}

export {
    fetchNewsList,
    fetchAskList,
    fetchJobsList,
    fetchList,
    fetchUserInfo,
    fetchAskItem,
}