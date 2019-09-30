import axios from 'axios';

const url = 'api/questions/';

class QuestionsService {
    // Post Questions
    static askQuestion(form) {
        return axios.post(url, form);
    }
}

export default QuestionsService;