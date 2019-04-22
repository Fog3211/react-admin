import axios from "axios";

const Service = {
    login(params) {
        return axios.post('/login', params).then(res => res.data);
    },
    getTableData(params) {
        return axios.get('/get_table_data', {
            params
        }).then(res => res.data);
    }
}
export default Service;