import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CommonForm from '../CommonForm/CommonForm';
import { loginFormControls } from '../config/Config';
import { AuthContext } from '../../context/Context';

const LoginForm = () => {
  const { loginFormData, setLoginFormData, handleLogin, loading, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  useEffect(() => {
    if (user) {
      if (user.role === 'admin') {
        navigate('/adminPanel');
      } else {
        navigate('/registration');
      }
    }
  }, [user, navigate]);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-lg w-[400px]">
        <h2 className="text-2xl font-bold text-center text-sky-600 mb-6">Login</h2>
        <CommonForm
          formControls={loginFormControls}
          formData={loginFormData}
          setFormData={setLoginFormData}
          onSubmit={handleLoginSubmit}
          buttonText="Login"
        />
        <p className="text-center text-sm mt-4">
          Don't have an account?{' '}
          <span
            onClick={() => navigate('/register')}
            className="text-sky-600 font-semibold cursor-pointer ms-2"
          >
            Register
          </span>
          {' | '}
          <span
            onClick={() => navigate('/admin-login')}
            className="text-sky-600 font-semibold cursor-pointer ms-2"
          >
            Admin Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;