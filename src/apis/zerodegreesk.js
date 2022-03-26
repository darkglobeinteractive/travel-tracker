import Axios from 'axios';

export default Axios.create({
  baseURL: 'https://0degreesk.com/wp-json/wp/v2',
  params: {
    format: 'json'
  }
});
