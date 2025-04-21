import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/Context';

const AdminPanel = () => {
    const {
        courseTypes,
        courses,
        courseOfferings,
        createCourseType,
        updateCourseType,
        deleteCourseType,
        createCourse,
        updateCourse,
        deleteCourse,
        createCourseOffering,
        updateCourseOffering,
        deleteCourseOffering,
    } = useContext(AuthContext);

    const [courseTypeForm, setCourseTypeForm] = useState({ id: null, name: '' });
    const [courseForm, setCourseForm] = useState({ id: null, name: '' });
    const [courseOfferingForm, setCourseOfferingForm] = useState({
        courseId: '',
        courseTypeId: '',
    });

    // Course Type Handlers
    const handleCourseTypeSubmit = (e) => {
        e.preventDefault();
        if (courseTypeForm.id) {
            updateCourseType(courseTypeForm.id, courseTypeForm.name);
        } else {
            createCourseType(courseTypeForm.name);
        }
        setCourseTypeForm({ id: null, name: '' });
    };

    const editCourseType = (ct) => {
        setCourseTypeForm({ id: ct.id, name: ct.name });
    };

    // Course Handlers
    const handleCourseSubmit = (e) => {
        e.preventDefault();
        if (courseForm.id) {
            updateCourse(courseForm.id, courseForm.name);
        } else {
            createCourse(courseForm.name);
        }
        setCourseForm({ id: null, name: '' });
    };

    const editCourse = (c) => {
        setCourseForm({ id: c.id, name: c.name });
    };

    // Course Offering Handlers
    const handleCourseOfferingSubmit = (e) => {
        e.preventDefault();
        createCourseOffering(
            parseInt(courseOfferingForm.courseId),
            parseInt(courseOfferingForm.courseTypeId)
        );
        setCourseOfferingForm({ courseId: '', courseTypeId: '' });
    };

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <h2 className="text-2xl font-bold mb-6 text-center">Admin Panel</h2>

            {/* Course Type Management */}
            <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Manage Course Types</h3>
                <form onSubmit={handleCourseTypeSubmit} className="flex gap-4 mb-4">
                    <input
                        type="text"
                        value={courseTypeForm.name}
                        onChange={(e) =>
                            setCourseTypeForm({ ...courseTypeForm, name: e.target.value })
                        }
                        placeholder="Course Type Name"
                        className="border border-gray-600 p-1 rounded-md px-2"
                    />
                    <button
                        type="submit"
                        className="bg-sky-500 p-2 px-4 rounded-xl font-bold text-slate-800 hover:bg-sky-700"
                    >
                        {courseTypeForm.id ? 'Update' : 'Create'}
                    </button>
                </form>
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="p-2 border">Name</th>
                            <th className="p-2 border">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courseTypes.map((ct) => (
                            <tr key={ct.id} className="text-center">
                                <td className="p-2 border">{ct.name}</td>
                                <td className="p-2 border">
                                    <button
                                        onClick={() => editCourseType(ct)}
                                        className="bg-yellow-500 p-1 px-2 rounded-md text-white mr-2"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => deleteCourseType(ct.id)}
                                        className="bg-red-500 p-1 px-2 rounded-md text-white"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Course Management */}
            <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Manage Courses</h3>
                <form onSubmit={handleCourseSubmit} className="flex gap-4 mb-4">
                    <input
                        type="text"
                        value={courseForm.name}
                        onChange={(e) =>
                            setCourseForm({ ...courseForm, name: e.target.value })
                        }
                        placeholder="Course Name"
                        className="border border-gray-600 p-1 rounded-md px-2"
                    />
                    <button
                        type="submit"
                        className="bg-sky-500 p-2 px-4 rounded-xl font-bold text-slate-800 hover:bg-sky-700"
                    >
                        {courseForm.id ? 'Update' : 'Create'}
                    </button>
                </form>
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="p-2 border">Name</th>
                            <th className="p-2 border">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses.map((c) => (
                            <tr key={c.id} className="text-center">
                                <td className="p-2 border">{c.name}</td>
                                <td className="p-2 border">
                                    <button
                                        onClick={() => editCourse(c)}
                                        className="bg-yellow-500 p-1 px-2 rounded-md text-white mr-2"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => deleteCourse(c.id)}
                                        className="bg-red-500 p-1 px-2 rounded-md text-white"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Course Offering Management */}
            <div>
                <h3 className="text-xl font-semibold mb-4">Manage Course Offerings</h3>
                <form onSubmit={handleCourseOfferingSubmit} className="flex gap-4 mb-4">
                    <select
                        value={courseOfferingForm.courseId}
                        onChange={(e) =>
                            setCourseOfferingForm({
                                ...courseOfferingForm,
                                courseId: e.target.value,
                            })
                        }
                        className="border border-gray-600 p-1 rounded-md px-2"
                    >
                        <option value="">Select Course</option>
                        {courses.map((c) => (
                            <option key={c.id} value={c.id}>
                                {c.name}
                            </option>
                        ))}
                    </select>
                    <select
                        value={courseOfferingForm.courseTypeId}
                        onChange={(e) =>
                            setCourseOfferingForm({
                                ...courseOfferingForm,
                                courseTypeId: e.target.value,
                            })
                        }
                        className="border border-gray-600 p-1 rounded-md px-2"
                    >
                        <option value="">Select Course Type</option>
                        {courseTypes.map((ct) => (
                            <option key={ct.id} value={ct.id}>
                                {ct.name}
                            </option>
                        ))}
                    </select>
                    <button
                        type="submit"
                        className="bg-sky-500 p-2 px-4 rounded-xl font-bold text-slate-800 hover:bg-sky-700"
                    >
                        Create
                    </button>
                </form>
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="p-2 border">Course</th>
                            <th className="p-2 border">Course Type</th>
                            <th className="p-2 border">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courseOfferings.map((co) => {
                            const course = courses.find((c) => c.id === co.courseId);
                            const courseType = courseTypes.find((ct) => ct.id === co.courseTypeId);
                            return (
                                <tr key={co.id} className="text-center">
                                    <td className="p-2 border">{course?.name || 'Unknown'}</td>
                                    <td className="p-2 border">{courseType?.name || 'Unknown'}</td>
                                    <td className="p-2 border">
                                        <button
                                            onClick={() => deleteCourseOffering(co.id)}
                                            className="bg-red-500 p-1 px-2 rounded-md text-white"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminPanel;