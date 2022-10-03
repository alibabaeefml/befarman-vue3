import axios from 'axios'
import url from '../url';
import { getArray, getJson, setData } from '../resources/carResource';
import { setQueries } from '@/utils/createQueriesObject';
export default class CarRepository {
    async index(data = {}) {
        const params = setQueries(data)
        const response = await axios.get(url('indexCar'), { params });
        return getArray(response.data);
    }

    async store(carData) {
        const formData = setData(carData);
        const response = await axios.post(url('storeCar'), formData);
        return getJson(response.data.data);
    }

    async update(carId, carData) {
        const formData = setData(carData);
        const response = await axios.put(url('updateCar', { car: carId }), formData);
        return getJson(response.data.data);
    }

    async delete(carId) {
        const response = await axios.delete(url('deleteCar', { car: carId }));
        return true;
    }
}