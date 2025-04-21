import React from 'react';
import CommonInput from '../CommonInput/CommonInput';

const formElementTypes = {
    INPUT: 'input',
    SELECT: 'select',
    TEXTAREA: 'textarea',
    CHECKBOX: 'checkbox',
    RADIO: 'radio',
    BUTTON: 'button',
};

const CommonForm = ({ formControls = [], buttonText, formData, setFormData, onSubmit }) => {
    function renderFormElement(getCurrentFormControl, getFormData) {
        let element = null;

        switch (getCurrentFormControl.componentType) {
            case formElementTypes.INPUT:
                element = (
                    <CommonInput
                        label={getCurrentFormControl.label}
                        type={getCurrentFormControl.type}
                        placeholder={getCurrentFormControl.placeholder}
                        value={getFormData[getCurrentFormControl.name]}
                        name={getCurrentFormControl.name}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                [getCurrentFormControl.name]: e.target.value,
                            })
                        }
                    />
                );
                break;

            case formElementTypes.SELECT:
                element = (
                    <div className="mt-2 w-full">
                        {getCurrentFormControl.label && (
                            <label
                                htmlFor={getCurrentFormControl.name}
                                className="block mb-1 text-sm font-medium text-gray-700"
                            >
                                {getCurrentFormControl.label}
                            </label>
                        )}
                        <select
                            id={getCurrentFormControl.name}
                            name={getCurrentFormControl.name}
                            value={getFormData[getCurrentFormControl.name] || ''}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    [getCurrentFormControl.name]: e.target.value,
                                })
                            }
                            className="border rounded-lg p-2 w-full block text-black"
                            required
                        >
                            <option value="">{getCurrentFormControl.placeholder || 'Select an option'}</option>
                            {getCurrentFormControl.options.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                );
                break;

            default:
                element = (
                    <CommonInput
                        label={getCurrentFormControl.label}
                        type={getCurrentFormControl.type}
                        placeholder={getCurrentFormControl.placeholder}
                        value={getFormData[getCurrentFormControl.name]}
                        name={getCurrentFormControl.name}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                [getCurrentFormControl.name]: e.target.value,
                            })
                        }
                    />
                );
                break;
        }
        return element;
    }

    return (
        <form onSubmit={onSubmit}>
            {formControls.map((singleFormElement, idx) => (
                <div key={idx}>{renderFormElement(singleFormElement, formData)}</div>
            ))}
            <button
                type="submit"
                className="bg-sky-600 p-2 rounded-lg text-white mt-4 w-full font-semibold hover:bg-sky-700 transition"
            >
                {buttonText || 'Submit'}
            </button>
        </form>
    );
};

export default CommonForm;