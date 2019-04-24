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
    getGraphData() {
        return axios.get('/get_graph_data',).then(res => res.data);
    },
    getFunnelData() {
        return axios.get('/get_funnel_data',).then(res => res.data);
    },
    getMapData() {
        return axios.get('/get_map_data',).then(res => res.data);
    }
}
export default Service;