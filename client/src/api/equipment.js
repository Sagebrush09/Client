import {$host} from './index.js';

export const getAll = async () => {
    const {data} = await $host.get('/getAll')
    return data
}