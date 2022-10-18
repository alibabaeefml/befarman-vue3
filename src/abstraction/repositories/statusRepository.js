import axios from 'axios'
import { getArray } from '../resources/statusDetailResource';
import url from '../url';

export default class StatusRepository {
    async index() {
        const response = await axios.get(url('indexStatus'));
        return getArray(response.data)
    }
};