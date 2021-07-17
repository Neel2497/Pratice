import {create} from 'apisauce';
import axios from 'axios';

// define the api
const api = create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  timeout: 10000,
});

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  timeout: 1000,
});

const getPost = ({limit}) => {
  const response = api
    .get(`posts?_limit=${limit}`)
    .then((res) => res.data)
    .catch((err) => console.log('err', err));
  return response;
};

const createPost = ({title, body, userId}) => {
  const response = api
    .post('posts', {title: title, body: body, userId: userId})
    .then((res) => res.data)
    .catch((err) => console.log('err', err));
  return response;
};

const getPostAxois = async ({limit}) => {
  try {
    const response = await instance.get(`posts?_limit=${limit}`);

    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }

  // You can use below method also to call API

  // return instance
  //   .get(`posts?_limit=${limit}`)
  //   .then((response) => {
  //     // handle success
  //     console.log('response', response.data);

  //     return response.data;
  //   })
  //   .catch((error) => {
  //     // handle error
  //     console.log('error', error);
  //   });
};

const getPostFetch = async ({limit}) => {
  let list;
  await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
    .then((response) => response.json())
    .then((data) => {
      list = data.data;
    });
  console.log('list', list);
  return list;
};

export {createPost, getPost, getPostAxois, getPostFetch};
export default api;
