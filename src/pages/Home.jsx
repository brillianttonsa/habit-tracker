import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Home() {
    return (
        <div className="min-h-screen ">
            <Navbar />
            
            {/* Main Hero Section */}
            <section className="bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 text-gray-800 px-6 py-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-10">
                    
                    {/* Text Content */}
                    <div className="w-full sm:w-1/2 space-y-6">
                        <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight tracking-tight text-blue-900">
                            Habit Flow Tracer
                        </h1>

                        <p className="text-lg sm:text-xl font-medium text-gray-700">
                            <span className="text-green-600 font-bold text-2xl sm:text-3xl">HabitFlow</span> is a web-based habit tracking platform designed to help you build positive routines and maintain consistency through visual motivation.
                        </p>

                        <p className="text-base sm:text-lg text-gray-600">
                            It automatically logs and visualizes your progress with elegant, real-time graphs — letting you focus on forming better habits while we handle the rest.
                        </p>

                        <Link to="/signup" className="mt-4 px-6 py-3 bg-green-500 text-white font-semibold rounded-xl shadow hover:bg-green-600 transition cursor-pointer">
                            Get Started
                        </Link>
                    </div>

                    <div className="w-full sm:w-1/2 flex justify-center">
                        <img
                            src="/habitTracer.png" 
                            alt="Habit Tracking Illustration"
                            className="max-w-md w-full h-auto drop-shadow-xl rounded-full object-cover sm:object-contain"
                        />
                    </div>
                </div>
            </section>
            <p>Hellow</p>
        </div>
    );
}

export default Home;
