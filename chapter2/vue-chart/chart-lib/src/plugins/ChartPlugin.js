import Chart from 'chart.js';

export default {
    // eslint-disable-next-line no-unused-vars
    install(Vue) {
        Vue.prototype.$_Chart = Chart;
    }
}