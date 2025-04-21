export const loginFormControls = [
    {
        name: 'email',
        label: 'Email',
        type: 'email',
        componentType: 'input',
        placeholder: 'Enter your email',
        required: true,
    },
    {
        name: 'password',
        label: 'Password',
        type: 'password',
        componentType: 'input',
        placeholder: 'Enter your password',
        required: true,
    },
];

export const registerFormControls = [
    {
        name: 'username',
        label: 'Username',
        type: 'text',
        componentType: 'input',
        placeholder: 'Enter your username',
        required: true,
    },
    {
        name: 'email',
        label: 'Email',
        type: 'email',
        componentType: 'input',
        placeholder: 'Enter your email',
        required: true,
    },
    {
        name: 'password',
        label: 'Password',
        type: 'password',
        componentType: 'input',
        placeholder: 'Enter your password',
        required: true,
    },
    {
        name: 'role',
        label: 'Role',
        componentType: 'select',
        placeholder: 'Select your role',
        options: [
            { value: 'user', label: 'User' },
            { value: 'admin', label: 'Admin' },
        ],
        required: true,
    },
];

export const adminLoginFormControls = [
    {
        name: 'email',
        label: 'Admin Email',
        type: 'email',
        componentType: 'input',
        placeholder: 'Enter admin email',
        required: true,
    },
    {
        name: 'password',
        label: 'Admin Password',
        type: 'password',
        componentType: 'input',
        placeholder: 'Enter admin password',
        required: true,
    },
];