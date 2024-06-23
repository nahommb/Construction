import axios from 'axios';

export const postData = async (payload) => {
  const response = await axios.post('https://example.com/api/endpoint', payload);
  return response.data;
};
export const fetchUsers = () => axios.get('https://api.github.com/users') //then(response => response.json());