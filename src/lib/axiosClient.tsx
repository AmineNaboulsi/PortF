import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://api.jsonbin.io/v3',
  headers: {
    'Content-Type': 'application/json',
    'X-Master-Key': '$2a$10$eyNx1XWj1WA0k27j1O47eOX4A3R38qNx0rTSRkDEKkirAcKYXPSae',
    'X-Access-Key': '$2a$10$v/qsegBdudikA2flydbZN.8Bblor1iQw34915wMs2bc79aiyFnM0C'
  }
});

export default axiosClient;
