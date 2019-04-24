import axios from "axios";

const Service = {
    login(params) {
        return axios.post('/login', params).then(res => res.data);
    },
    getTableData(params) {
        return axios.get('/get_table_data', {
            params
        }).then(res => res.data);
    },
    getSunburstData() {
        return axios.get('/get_sunburst_data',).then(res => res.data);
    },
    getEchartData(){
        return axios.get('/get_echart_data',).then(res => res.data);
    }
}
export default Service;