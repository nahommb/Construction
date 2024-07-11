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

export const loginRequest = (payload)=>{
  axios.defaults.withCredentials = true;
   const response = axios.post('http://localhost:3001/login',payload)

   return response
}

export const previousWork = async()=>{
  const response = await axios.get('http://localhost:3001/admin/previousworks')

  return response;
}

export const addPreviousWork = async(formData)=>{
  try {
    const response = await axios.post('http://localhost:3001/admin/addpreviouswork', formData);
    console.log(response)

   return response

} catch (error) { 
    console.error('Error uploading the image', error);
}
}

export const session = async()=>{
  axios.defaults.withCredentials = true;
  const response = await axios.get('http://localhost:3001/session')
  console.log(response)
  return response;
}

export const deleteRequest = async(id)=>{
  const response = await axios.delete(`http://localhost:3001/admin/deletepreviouswork/${id}`)
  console.log(response)
  return response; 
}