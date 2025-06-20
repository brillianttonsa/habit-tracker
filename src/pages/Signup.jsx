import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import axios from 'axios';
import {useAuth} from '../auth/AuthContext';

function Signup() {
    const [form, setForm] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { login } = useAuth()

    const handleChange = e => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
        // Clear error when user starts typing
        if (error) setError("")
    };

    const validateEmail = email =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleSubmit =async e => {
        e.preventDefault();
        setLoading(true);
        setError('');

        if (!validateEmail(form.email)) {
            setLoading(false);
            return setError('Invalid email address');
        }
        if (form.password !== form.confirmPassword) {
            setLoading(false);
            return setError("Passwords don't match");
        }
        if (form.password.length < 6) {
            setLoading(false);
            return setError('Password must be at least 6 characters long');
        }
        

        try {
            const API = import.meta.env.VITE_API_URL;
            const response = await axios.post(`${API}/auth/signup`, {
                email: form.email,
                password: form.password,
            }); 

            if (response.status === 201) {
                const { token, user } = response.data;
                // Store in context
                login(user, token);
                // Navigate to dashboard
                navigate("/dashboard");
              }
        } catch (error) {
            console.error('Signup error:', error.message);
            setError('An error occurred during signup. Please try again.');
        }finally{
            setLoading(false);
        }

    };

    return (
        <>
            <Navbar/>
            <div className="min-h-screen flex items-center justify-center bg-blue-50 px-4">
                <div className="w-full max-w-md bg-white p-6 rounded-xl shadow">
                    <h2 className="text-2xl font-bold text-center text-blue-700">Create Your Account</h2>

                    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                        <div>
                            <label className="block mb-1 text-sm font-medium text-gray-700">Email:</label>
                            <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder='brillianttonsa@gmail.com'
                            required
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 text-sm font-medium text-gray-700">Password:</label>
                            <input
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            placeholder='********'
                            required
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 text-sm font-medium text-gray-700">Confirm Password:</label>
                            <input
                            type="password"
                            name="confirmPassword"
                            value={form.confirmPassword}
                            onChange={handleChange}
                            placeholder='********'
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        {error && (
                            <p className="text-red-500 border-l-2 text-[17px] px-2 bg-red-50 py-2 text-sm">{error}</p>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full py-2 ${loading?"bg-green-300":"bg-green-500 hover:bg-green-600 transition"}  text-white font-semibold rounded-lg`}
                        >
                            {loading?"Loading ...":"Sign Up"}
                        </button>
                    </form>

                    <p className="mt-4 text-sm text-center text-gray-600">
                    Already have an account? <Link to='/login' className="text-blue-500 hover:underline">Login here</Link>
                    </p>
                    <p className="mt-4 text-sm text-center text-gray-600">
                    Forget Password? <Link to="/forget-password" className="text-blue-500 hover:underline">Forget Password?</Link>
                    </p>
                </div>
            </div>
        </>
  );
}

export default Signup;
