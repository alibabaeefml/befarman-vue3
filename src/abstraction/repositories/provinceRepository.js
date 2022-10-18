import axios from 'axios';
import { getArray } from '../resources/provinceResource';
import url from '../url';

export default class ProvinceRepository {
    async index() {
        const response = await axios.get(url('indexProvince'));
        return getArray(response.data.data)
    }
};