import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/Context';

const Header = () => {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  // for login and logout option
  const handleAuthClick = () => {
    if (user) {
      setUser(null);
      localStorage.removeItem('user');
      navigate('/');
    } else {
      navigate('/');
    }
  };

  return (
    <div className="py-2 px-10 bg-slate-100 shadow-lg sticky top-0 z-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl text-sky-600">StudentLogin</h1>
        </div>
        <div>
          <ul className="flex justify-between items-center gap-5">
            {user && user.role === 'admin' && (
              <li>
                <button
                  onClick={() => navigate('/adminPanel')}
                  className="text-sky-600 hover:underline"
                >
                  Admin Panel
                </button>
              </li>
            )}
            <li className="flex items-center">
              Registered Users{' '}
              <span className="inline-block bg-emerald-500 text-white text-xs font-light py-1 px-1 rounded-full ms-1 animate-blink"></span>
            </li>
            <li>Courses</li>
          </ul>
        </div>
        <div>
          <button
            onClick={handleAuthClick}
            className="bg-sky-600 py-2 px-4 text-white rounded-xl font-semibold hover:bg-sky-700"
          >
            {user ? 'Logout' : 'Login'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;