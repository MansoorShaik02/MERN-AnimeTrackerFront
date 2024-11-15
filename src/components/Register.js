// import axios from 'axios';
// import { useState } from 'react';
// import "../styles/Register.css"

// const Register = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [message, setMessage] = useState('');
//     const [error, setError] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setMessage('');
//         setError('');
//         console.log("Name:", name);
//         console.log("Email:", email);
//         console.log("Password:", password);

//         try {
//             const response = await axios.post('https://mern-anime-tracker-back.vercel.app/api/users/register', {
//                 username: name,
//                 email,
//                 password,
//             });

//             // Handle the success message here
//             setMessage(response.data.msg);
//             console.log("set message: ", response.data.msg)
//         } catch (error) {
//             console.error('Error registering user:', error.response?.data?.msg || error.message);
//             setError('Registration failed: ' + (error.response?.data?.msg || 'Server error'));
//         }
//         finally {
//             console.log("Registered successully")
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//                 type="text"
//                 placeholder="Name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//             />
//             <input
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//             />
//             <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//             />
//             <button type="submit">Register</button>
//             {message && <p style={{ color: 'green' }}>{message}</p>}
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//         </form>
//     );
// };

// export default Register;


import axios from 'axios';
import { useState } from 'react';
import "../styles/Register.css";

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setError('');
        setLoading(true); // Start loading
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Password:", password);

        try {
            const response = await axios.post('https://mern-anime-tracker-back.vercel.app/api/users/register', {
                username: name,
                email,
                password,
            });

            // Handle the success message here
            setMessage(response.data.msg);
        } catch (error) {
            console.error('Error registering user:', error.response?.data?.msg || error.message);
            setError('Registration failed: ' + (error.response?.data?.msg || 'Server error'));
        } finally {
            setLoading(false); // Stop loading
            console.log("Registered successfully");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type="submit" disabled={loading}>
                {loading ? <span className="spinner"></span> : "Register"}
            </button>
            {message && <p style={{ color: 'green' }}>{message}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
    );
};

export default Register;
