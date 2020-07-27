import { wait } from '../utils/utils';
import { getJSONFromLocal, saveJSONToLocal } from '../utils/localStorage';

export const saveDriver = async (data) => {
  // TODO Get data from backend
  // return http.post(`/api/driver`, data);
  await wait(2000); // simulates server delay
  // update data in local storage
  const drivers = getJSONFromLocal('drivers') || [];
  drivers.push(data);
  saveJSONToLocal('drivers', drivers);
  return data;
};

export const getDrivers = async () => {
  // TODO Get data from backend
  // return http.get(`/api/drivers/`);
  await wait(2000); // simulates server delay
  return getJSONFromLocal('drivers');
};
