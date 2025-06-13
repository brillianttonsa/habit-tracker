import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import FeatureCard from '../components/features/FeatureCard';
import { habitTrackerFeaturesCore, habitTrackerFeaturesAdvanced } from '../components/features/Features';
import Footer from '../components/Footer';

function Home() {
    return (
        <div className="min-h-screen ">
            <Navbar />
            
            <section className="bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 text-gray-800 px-6 py-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-10">
                    
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
                {/* features section */}
            <section className="p-6 text-gray-800">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {habitTrackerFeaturesCore.map((feature, index) => 
                            <FeatureCard
                                key={index}
                                title={feature.title}
                                icon={feature.icon}
                                description={feature.description}
                            />
                        )
                    }
                </div>
            </section>
            <section className='p-6 bg-gray-100 text-gray-800'>
                <h2 className='text-green-600 text-sm'>Coming features...</h2>

                <div className="mt-2 grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {habitTrackerFeaturesAdvanced.map((feature, index) => 
                        <FeatureCard
                            key={index}
                            title={feature.title}
                            icon={feature.icon}
                            description={feature.description}
                            />
                    )}
                </div>
            </section>

            <Footer/>
        </div>
    );
}

export default Home;
