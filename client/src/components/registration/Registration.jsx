import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Registration = () => {
  return (
    <div className="flex flex-col items-center bg-gray-100 text-center px-4 py-2 relative min-h-screen">
      <div className="mt-5 flex flex-col items-center justify-center">
        <h1 className="sm:text-4xl font-bold text-slate-800 text-2xl">
          Welcome to the Registration Page
        </h1>
        <p className="sm:text-lg text-slate-800">
          Please choose an option below to proceed
        </p>
        <p className="sm:text-lg text-slate-700">
          You can register as a user or view registered users
        </p>
        <div className="flex gap-4 mt-5 sm:text-lg text-sm">
          <Link to="userRegister">
            <button className="bg-sky-500 sm:p-2 sm:px-4 p-2 rounded-xl font-bold text-slate-800 text-shadow-xs hover:bg-linear-to-tl from-sky-700 to-emerald-400">
              User Registration for Courses
            </button>
          </Link>
          <Link to="registeredUsers">
            <button className="bg-sky-500 p-2 px-4 rounded-xl font-bold text-slate-800 text-shadow-xs hover:bg-linear-to-tl from-sky-700 to-emerald-400">
              Registered Users
            </button>
          </Link>
        </div>
      </div>

      <Outlet />

    </div>
  );
};

export default Registration;