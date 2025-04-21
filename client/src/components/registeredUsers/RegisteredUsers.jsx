import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/Context';

const RegisteredUsers = () => {
  const { registrations, users, courseOfferings, courses, courseTypes } = useContext(AuthContext);
  const [filterCourseTypeId, setFilterCourseTypeId] = useState('');

  // Filter registrations based on course type
  const filteredRegistrations = filterCourseTypeId
    ? registrations.filter((reg) => {
      const offering = courseOfferings.find((co) => co.id === reg.courseOfferingId);
      return offering?.courseTypeId === parseInt(filterCourseTypeId);
    })
    : registrations;

  const formattedRegistrations = filteredRegistrations.map((reg) => {
    const user = users.find((u) => u.id === reg.userId);
    const offering = courseOfferings.find((co) => co.id === reg.courseOfferingId);
    const course = courses.find((c) => c.id === offering?.courseId);
    const courseType = courseTypes.find((ct) => ct.id === offering?.courseTypeId);

    return {
      username: user?.username || 'Unknown',
      offering: `${courseType?.name || ''} - ${course?.name || ''}`,
    };
  });

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-center">Registered Users</h2>
      <div className="mb-4">
        <label>Filter by Course Type: </label>
        <select
          value={filterCourseTypeId}
          onChange={(e) => setFilterCourseTypeId(e.target.value)}
          className="border border-gray-600 p-1 rounded-md px-2"
        >
          <option value="">All Course Types</option>
          {courseTypes.map((ct) => (
            <option key={ct.id} value={ct.id}>
              {ct.name}
            </option>
          ))}
        </select>
      </div>
      <div className="bg-white shadow-md rounded p-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">Username</th>
              <th className="p-2 border">Course Offering</th>
            </tr>
          </thead>
          <tbody>
            {formattedRegistrations.map((r, i) => (
              <tr key={i} className="text-center">
                <td className="p-2 border">{r.username}</td>
                <td className="p-2 border">{r.offering}</td>
              </tr>
            ))}
            {formattedRegistrations.length === 0 && (
              <tr>
                <td colSpan="2" className="text-center text-gray-500 p-4">
                  No registrations yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RegisteredUsers;