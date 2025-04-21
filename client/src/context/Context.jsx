import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

const Context = ({ children }) => {
  const [loginFormData, setLoginFormData] = useState({ email: '', password: '' });
  const [registerFormData, setRegisterFormData] = useState({ username: '', email: '', password: '', role: 'user' });
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [courseTypes, setCourseTypes] = useState([]);
  const [courses, setCourses] = useState([]);
  const [courseOfferings, setCourseOfferings] = useState([]);
  const [registrations, setRegistrations] = useState([]);
  const [users, setUsers] = useState([]); 

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) setUser(storedUser);

    const storedCourseTypes = JSON.parse(localStorage.getItem('courseTypes')) || [];
    const storedCourses = JSON.parse(localStorage.getItem('courses')) || [];
    const storedCourseOfferings = JSON.parse(localStorage.getItem('courseOfferings')) || [];
    const storedRegistrations = JSON.parse(localStorage.getItem('registrations')) || [];
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    setCourseTypes(storedCourseTypes);
    setCourses(storedCourses);
    setCourseOfferings(storedCourseOfferings);
    setRegistrations(storedRegistrations);
    setUsers(storedUsers);
  }, []);

  // Course Type CRUD (unchanged)
  const createCourseType = (name) => {
    const id = courseTypes.length + 1;
    const newCourseType = { id, name };
    const updatedCourseTypes = [...courseTypes, newCourseType];
    setCourseTypes(updatedCourseTypes);
    localStorage.setItem('courseTypes', JSON.stringify(updatedCourseTypes));
  };

  const updateCourseType = (id, name) => {
    const updatedCourseTypes = courseTypes.map((ct) =>
      ct.id === id ? { ...ct, name } : ct
    );
    setCourseTypes(updatedCourseTypes);
    localStorage.setItem('courseTypes', JSON.stringify(updatedCourseTypes));
  };

  const deleteCourseType = (id) => {
    const updatedCourseTypes = courseTypes.filter((ct) => ct.id !== id);
    setCourseTypes(updatedCourseTypes);
    localStorage.setItem('courseTypes', JSON.stringify(updatedCourseTypes));
  };

  // Course CRUD
  const createCourse = (name) => {
    const id = courses.length + 1;
    const newCourse = { id, name };
    const updatedCourses = [...courses, newCourse];
    setCourses(updatedCourses);
    localStorage.setItem('courses', JSON.stringify(updatedCourses));
  };

  const updateCourse = (id, name) => {
    const updatedCourses = courses.map((c) => (c.id === id ? { ...c, name } : c));
    setCourses(updatedCourses);
    localStorage.setItem('courses', JSON.stringify(updatedCourses));
  };

  const deleteCourse = (id) => {
    const updatedCourses = courses.filter((c) => c.id !== id);
    setCourses(updatedCourses);
    localStorage.setItem('courses', JSON.stringify(updatedCourses));
  };

  // Course Offering CRUD 
  const createCourseOffering = (courseId, courseTypeId) => {
    const id = courseOfferings.length + 1;
    const newOffering = { id, courseId, courseTypeId };
    const updatedOfferings = [...courseOfferings, newOffering];
    setCourseOfferings(updatedOfferings);
    localStorage.setItem('courseOfferings', JSON.stringify(updatedOfferings));
  };

  const updateCourseOffering = (id, courseId, courseTypeId) => {
    const updatedOfferings = courseOfferings.map((co) =>
      co.id === id ? { ...co, courseId, courseTypeId } : co
    );
    setCourseOfferings(updatedOfferings);
    localStorage.setItem('courseOfferings', JSON.stringify(updatedOfferings));
  };

  const deleteCourseOffering = (id) => {
    const updatedOfferings = courseOfferings.filter((co) => co.id !== id);
    setCourseOfferings(updatedOfferings);
    localStorage.setItem('courseOfferings', JSON.stringify(updatedOfferings));
  };

  // Student Registration 
  const registerStudent = (userId, courseOfferingId) => {
    const id = registrations.length + 1;
    const newRegistration = { id, userId, courseOfferingId };
    const updatedRegistrations = [...registrations, newRegistration];
    setRegistrations(updatedRegistrations);
    localStorage.setItem('registrations', JSON.stringify(updatedRegistrations));
  };

  // Login and Register Handlers
  const handleLogin = () => {
    setLoading(true);
    const { email, password } = loginFormData;
    const matchedUser = users.find((u) => u.email === email && u.password === password);

    if (matchedUser) {
      setUser(matchedUser);
      localStorage.setItem('user', JSON.stringify(matchedUser));
    } else {
      alert('Invalid email or password.');
    }
    setLoading(false);
  };

  const handleRegister = () => {
    setLoading(true);
    const { username, email, password, role } = registerFormData;
    if (users.some((u) => u.email === email)) {
      alert('Email is already registered.');
      setLoading(false);
      return;
    }

    const id = users.length + 1;
    const userData = { id, username, email, password, role };
    const updatedUsers = [...users, userData];
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    setLoading(false);
  };

  return (
    <AuthContext.Provider
      value={{
        loginFormData,
        setLoginFormData,
        registerFormData,
        setRegisterFormData,
        user,
        setUser,
        loading,
        setLoading,
        handleLogin,
        handleRegister,
        courseTypes,
        courses,
        courseOfferings,
        registrations,
        users,
        createCourseType,
        updateCourseType,
        deleteCourseType,
        createCourse,
        updateCourse,
        deleteCourse,
        createCourseOffering,
        updateCourseOffering,
        deleteCourseOffering,
        registerStudent,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default Context;