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
    <div className="mt-10 bg-white shadow-md rounded px-8 py-4 w-3/4 flex flex-col">
      <div className="text-center mt-2 mb-8">
        <h1>Hi, {user?.username}! Please fill your details to register</h1>
        <p>Your User ID is {user?.id}</p>
      </div>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <label>User ID: </label>
          <input
            type="text"
            value={user?.id || ''}
            disabled
            className="border border-gray-600 p-1 rounded-md px-2 bg-gray-200"
          />
        </div>
        <div>
          <label>Username: </label>
          <input
            type="text"
            value={user?.username || ''}
            disabled
            className="border border-gray-600 p-1 rounded-md px-2 bg-gray-200"
          />
        </div>
        <div>
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
        <div>
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
        <div>
          <label>Course Offering: </label>
          <select
            name="courseOfferingId"
            value={formData.courseOfferingId}
            onChange={handleChange}
            className="border border-gray-600 p-1 rounded-md px-2"
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
          className="bg-sky-500 p-2 px-4 rounded-xl font-bold text-slate-800 hover:bg-sky-700"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default UserRegister;