// App.jsx
import React from 'react';
import LoginForm from './components/Login/Login.jsx';
import Register from './components/register/Register.jsx';
import Registration from './components/registration/Registration.jsx';
import UserRegister from './components/userRegister/UserRegister.jsx';
import { useRoutes } from 'react-router-dom';
import RegisteredUsers from './components/registeredUsers/RegisteredUsers.jsx';
import PrivateRoute from './privateRoute/PrivateRoute.jsx';
import AdminPanel from './components/admin/Admin.jsx';
import AdminLogin from './components/admin/AdminLogin.jsx';
import Layout from './Layout/Layout.jsx';

const App = () => {
  const router = useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <LoginForm /> },
        { path: 'admin-login', element: <AdminLogin /> },
        { path: 'register', element: <Register /> },
        {
          path: 'adminPanel',
          element: (
            <PrivateRoute>
              <AdminPanel />
            </PrivateRoute>
          ),
        },
        {
          path: 'registration',
          element: (
            <PrivateRoute>
              <Registration />
            </PrivateRoute>
          ),
          children: [
            { path: 'userRegister', element: <UserRegister /> },
            { path: 'registeredUsers', element: <RegisteredUsers /> },
          ],
        },
      ],
    },
  ]);
  return router;
};

export default App;