import axios from "axios";

const STAT_BASE_URL="https://nbaws-production.up.railway.app/statbyjoueurs";

class StatService{
    getStat(){
        return axios.get(STAT_BASE_URL);
    }
}

export default StatService;