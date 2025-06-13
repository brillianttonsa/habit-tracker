import { useState } from "react"
import axios from 'axios';
import Navbar from '../components/Navbar';
import { Link } from "react-router-dom";

function ForgetPassword(){
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const validateEmail = email =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);


    const handleSubmit = async e => {
        e.preventDefault();
        setError('');
        setLoading('');

        if(!validateEmail(email)){
            return setError("invalid email address")
        }

        setLoading(true)

        try{
            const API = import.meta.env.VITE_API_URL;
            const response = await axios.post(`${API}/auth/forgot-password`, {
                email,
            });

            if(response.status === 200){
                setStatus("Reset instructions have been sent to your email ");
                setEmail('');
            } else{
                setError("Unexpected response. Please try again later.")
            }
        } catch(error){
            setError(error.response?.data?.message || "Something went wrong")
        } finally{
            setLoading(false)
        }

    }

    return(
        <>
           <Navbar /> 

            <div className="min-h-screen flex items-center justify-center bg-blue-50 px-4">
                <div className="w-full max-w-md bg-white p-6 rounded-xl shadow">
                <h2 className="text-2xl font-bold text-center text-blue-700 mb-4">
                    Forgot Password
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">Email address</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                    </div>

                    {error && <p className="text-red-500 text-md bg-red-50 border-l-2 px-2 py-1">{error}</p>}
                    {status && <p className="text-green-600 text-sm bg-green-50 border-l-4 px-2 py-1">{status}</p>}

                    <button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-2 ${loading ? "bg-blue-300" : "bg-green-400 hover:bg-green-500"} text-white font-semibold rounded-lg`}
                    >
                    {loading ? "Sending..." : "Send Reset Link"}
                    </button>
                </form>

                <p className="mt-4 text-sm text-center text-gray-600">
                    Remember your password? <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
                </p>
                </div>
            </div>
        </>
    )
}

export default ForgetPassword