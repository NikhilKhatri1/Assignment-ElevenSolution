import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/Context';

const UserRegister = () => {
  const {
    user,
    courseTypes,
    courses,
    courseOfferings,
    registerStudent,
  } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    courseTypeId: '',
    courseId: '',
    courseOfferingId: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.courseOfferingId && user?.id) {
      registerStudent(user.id, parseInt(formData.courseOfferingId));
      alert('Registration successful!');
      setFormData({ courseTypeId: '', courseId: '', courseOfferingId: '' });
    } else {
      alert('Please select a course offering.');
    }
  };

  // Filter course offerings based on selected course type
  const filteredOfferings = formData.courseTypeId
    ? courseOfferings.filter(
      (co) => co.courseTypeId === parseInt(formData.courseTypeId)
    )
    : courseOfferings;

  return (

    <div className="sm:my-5 mt-5 bg-white shadow-md rounded-lg sm:px-8 sm:py-4 w-[95vw] flex flex-col px-3 py-4 sm:w-1/2 text-sm sm:text-lg">
      <div className="text-center mt-2 mb-8">
        <h1 className='font-bold'>Hi, {user?.username}! Please fill your details to register</h1>
        <p className='font-semibold mt-2'>Your User ID is {user?.id}</p>
      </div>
      <form className="flex flex-col gap-4 justify-center items-start" onSubmit={handleSubmit}>
        <div className='flex justify-between items-center gap-3 w-full'>
          <label>User ID: </label>
          <input
            type="text"
            value={user?.id || ''}
            disabled
            className="border border-gray-600 p-1 rounded-md px-2 bg-gray-200"
          />
        </div>
        <div className='flex justify-between items-center gap-3 w-full'>
          <label>Username: </label>
          <input
            type="text"
            value={user?.username || ''}
            disabled
            className="border border-gray-600 p-1 rounded-md px-2 bg-gray-200"
          />
        </div>
        <div className='flex justify-between items-center gap-3 w-full'>
          <label>Course Type: </label>
          <select
            name="courseTypeId"
            value={formData.courseTypeId}
            onChange={handleChange}
            className="border border-gray-600 p-1 rounded-md px-2"
          >
            <option value="">Select Course Type</option>
            {courseTypes.map((ct) => (
              <option key={ct.id} value={ct.id}>
                {ct.name}
              </option>
            ))}
          </select>
        </div>
        <div className='flex justify-between items-center gap-3 w-full'>
          <label>Courses: </label>
          <select
            name="courseId"
            value={formData.courseId}
            onChange={handleChange}
            className="border border-gray-600 p-1 rounded-md px-2"
          >
            <option value="">Select Course</option>
            {courses.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
        <div className='flex justify-between items-center gap-3 w-full'>
          <label>Course Offering: </label>
          <select
            name="courseOfferingId"
            value={formData.courseOfferingId}
            onChange={handleChange}
            className="border border-gray-600 p-1 rounded-md px-2 w-50"
          >
            <option value="">Select Course Offering</option>
            {filteredOfferings.map((co) => {
              const course = courses.find((c) => c.id === co.courseId);
              const courseType = courseTypes.find((ct) => ct.id === co.courseTypeId);
              return (
                <option key={co.id} value={co.id}>
                  {courseType?.name} - {course?.name}
                </option>
              );
            })}
          </select>
        </div>
        <button
          type="submit"
          className="bg-sky-500 p-2 px-4 rounded-xl font-bold text-slate-800 hover:bg-sky-700 w-full my-5 sm:my-1"
        >
          Register
        </button>
      </form>
    </div>

  );
};

export default UserRegister;