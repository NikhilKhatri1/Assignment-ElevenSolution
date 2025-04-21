import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Registration = () => {
  return (
    <div className="flex flex-col items-center h-screen bg-gray-100">
      <div className="mt-5 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-slate-800">
          Welcome to the Registration Page
        </h1>
        <p className="text-lg text-slate-600">
          Please choose an option below to proceed
        </p>
        <p className="text-lg text-slate-600">
          You can register as a user or view registered users
        </p>
        <div className="flex gap-4 mt-10">
          <button className="bg-sky-500 p-2 px-4 rounded-xl font-bold text-slate-800 text-shadow-xs hover:bg-linear-to-tl from-sky-700 to-emerald-400">
            <Link to="userRegister">User Registration for Course</Link>
          </button>
          <button className="bg-sky-500 p-2 px-4 rounded-xl font-bold text-slate-800 text-shadow-xs hover:bg-linear-to-tl from-sky-700 to-emerald-400">
            <Link to="registeredUsers">Registered Users</Link>
          </button>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Registration;