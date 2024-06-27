import axios from 'axios';

export const postData = async (payload) => {

    axios.defaults.withCredentials = true;

  const response = await axios.post('http://localhost:3001/register', payload, {
    headers: {
    'Content-Type': 'application/json'
}
});

  return response.data;
};

export const fetchUsers = () => axios.get('https://api.github.com/users') //then(response => response.json());

export const login = (payload)=>{
   const response = axios.post('http://localhost:3001/register',payload)

   return response
}