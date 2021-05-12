// import { resultCodeEnum } from './../../../enum/resultCode';
import Axios  from 'axios';

export const instansAxios = Axios.create({
  // withCredentials: true,
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

export const usersAPI = {
  getUsers() {
      return instansAxios.get(`users`)
  }
}

// ответ от сервера
// export type ApiTypes<D = [], RC = resultCodeEnum> = {
//   resultCode: RC;
//   items: D;
//   message: string;
// }
