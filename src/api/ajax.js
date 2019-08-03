import axios from 'axios';
import qs from 'qs';

export default function ajax(url, data={}, type='GET') {

  type = type.toUpperCase();

  return new Promise((resolve, reject) => {
    let promise;

    // GET 请求
    if(type === 'GET') {
      promise = axios.get(url, {
        params: data
      })
    }

    // POST 请求
    else if(type === 'POST') {
      promise = axios.post(url, qs.stringify(data))
    }

    // 请求成功
    promise.then(response => {
      resolve(response.data)
    })
  })
}

