export type * from "axios";
import * as axiosLib from "axios";

const { default: axios } = axiosLib;

export type APIRequest = {
  get: <A>(url: string) => Promise<A>;
  post: <A, B>(url: string, payload?: A) => Promise<B>;
  patch: <A, B>(url: string, payload?: A) => Promise<B>;
  put: <A, B>(url: string, payload?: A) => Promise<B>;
  delete: <A, B>(url: string, payload?: A) => Promise<B>;
};

function createMyAxios(): APIRequest {

  const instance = axios.create({});
  instance.defaults.baseURL = "https://swapi.dev/api";
  instance.defaults.headers.common["Content-Type"] = "application/json";

  return {
    get: <T>(path: string) => new Promise<T>((resolve, reject) => {
      instance
        .get(path)
        .then((response) => {
          resolve(response.data as T);
        })
        .catch((error) => {
          reject(error);
        });
    }),
    post: <A, B>(path: string, payload?: A) => new Promise<B>((resolve, reject) => {
      instance
        .post(path, payload)
        .then((response) => {
          resolve(response.data as B);
        })
        .catch((error) => {
          reject(error);
        });
    }),
    patch: <A, B>(path: string, payload?: A) => new Promise<B>((resolve, reject) => {
      instance
        .patch(path, payload)
        .then((response) => {
          resolve(response.data as B);
        })
        .catch((error) => {
          reject(error);
        });
    }),
    put: <A, B>(path: string, payload?: A) => new Promise<B>((resolve, reject) => {
      instance
        .put(path, payload)
        .then((response) => {
          resolve(response.data as B);
        })
        .catch((error) => {
          reject(error);
        });
    }),
    delete: <A, B>(path: string, payload?: A) => new Promise<B>((resolve, reject) => {
      instance
        .delete(path, { data: payload })
        .then((response) => {
          resolve(response.data as B);
        })
        .catch((error) => {
          reject(error);
        });
    })
  };
}


export default createMyAxios();