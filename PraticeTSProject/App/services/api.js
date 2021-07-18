import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  timeout: 1000,
});

const getPostAxois = async ({limit}) => {
  try {
    const response = await api.get(`posts?_limit=${limit}`);

    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

const createPost = async ({title, body, userId}) => {
  try {
    const response = await api.post('posts', {
      title: title,
      body: body,
      userId: userId,
    });

    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export {getPostAxois, createPost};
