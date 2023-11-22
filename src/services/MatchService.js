import axios from "axios";

const MATCH_BASE_URL="https://nbaws-production.up.railway.app/matchs";

class MatchService{
    getMatch(){
        return axios.get(MATCH_BASE_URL);
    }
}

export default MatchService;