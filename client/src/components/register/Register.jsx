import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CommonForm from '../CommonForm/CommonForm';
import { registerFormControls } from '../config/Config';
import { AuthContext } from '../../context/Context';

const RegisterForm = () => {
  const { registerFormData, setRegisterFormData, handleRegister, loading, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    handleRegister();
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
    <div className="w-full h-screen flex items-center justify-center bg-gray-100 mt-[-20px] px-2">
      <div className="bg-white p-8 shadow-lg rounded-lg w-[400px]">
        <h2 className="text-2xl font-bold text-center text-sky-600 mb-6">Register</h2>
        <CommonForm
          formControls={registerFormControls}
          formData={registerFormData}
          setFormData={setRegisterFormData}
          onSubmit={handleRegisterSubmit}
          buttonText="Register"
        />
        <p className="text-center text-sm mt-4">
          Already have an account?{' '}
          <span
            onClick={() => navigate('/')}
            className="text-sky-600 font-semibold cursor-pointer ms-2"
          >
            Login
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

export default RegisterForm;