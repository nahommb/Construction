import {useEffect} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Login from '../pages/login';


const AdminLogin = () => {
  
  const query = new URLSearchParams(useLocation().search);
  console.log(query)
  const showAdmin = query.get('showadmin') === 'true';
  const navigate = useNavigate();

  useEffect(() => {
    if (!showAdmin) {
      navigate('/');
    }
  }, [showAdmin, navigate]);

  if (!showAdmin) {
    console.log('yess')
    return null;
  }
  

  return (
  <Login/>
  );
};

export default AdminLogin;
