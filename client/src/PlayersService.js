import axios from 'axios';

const url = 'api/players/';

class PlayersService {
    // Get Teams
    static getPlayers() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url);
                resolve(res.data);
                //     data
                //     // data.map(player => ({
                //     //     ...player,
                //     // }))
                // );
            } catch(err) {
                reject(err);
            }
        });
    }
}

export default PlayersService;