import React from 'react';

const CommonInput = ({ label, type, value, placeholder, className, onChange, name }) => {
    return (
        <div className="mt-2 w-full">
            {label && (
                <label htmlFor={name} className="block mb-1 text-sm font-medium text-gray-700">
                    {label}
                </label>
            )}
            <input
                id={name}
                type={type || "text"}
                placeholder={placeholder || "Enter Text"}
                value={value}
                name={name}
                onChange={onChange}
                className={className || "border rounded-lg p-2 w-full block text-black"}
                required
            />
        </div>
    );
};

export default CommonInput;
