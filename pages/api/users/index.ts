import { resultCodeEnum } from './../../../enum/resultCode';
import Axios  from 'axios';


export const instansAxios = Axios.create({
  // withCredentials: true,
  baseURL: 'https://volspb.ru/RESTful/',
});

export const usersAPI = {
  getUsers() {
      return instansAxios.get(`users?page=0&count=10`)
  }
}

// ответ от сервера
export type ApiTypes<D = [], RC = resultCodeEnum> = {
  resultCode: RC;
  items: D;
  message: string;
}
