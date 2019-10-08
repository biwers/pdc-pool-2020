import axios from 'axios';

const url = 'api/winners/';

class WinnersService {
    // Get Past Winners
    static getWinners() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url);
                const data = res.data;
                resolve(data.sort((a,b) => {
                    return  b.year > a.year ? 1
                            : b.year < a.year ? -1
                            : 0;
                }))
            } catch(err) {
                reject(err);
            }
        });
    }
}

export default WinnersService;