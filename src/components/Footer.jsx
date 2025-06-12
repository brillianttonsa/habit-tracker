import { Link } from "react-router-dom"

function Footer(){
    return(
        <footer className="bg-blue-900 text-white px-6 py-8 ">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
                <div>
                    <h3 className="text-lg font-bold mb-2 text-green-400">HabitFlow</h3>
                    <p className="text-gray-300">
                        Your personal assistant for habit transformation. Track, improve, and
                        stay consistent with visual motivation.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-2 text-green-300">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><Link to="/" className="hover:underline">Home</Link></li>
                        <li><Link to="/signup" className="hover:underline">Get Started</Link></li>
                    </ul>
                </div>

                {/* Contact / Support */}
                <div>
                <h3 className="text-lg font-semibold mb-2 text-green-300">Support</h3>
                <ul className="space-y-2">
                    <li>Email: <a href="mailto:abdullatifmnyamis@gmail.com" className="hover:underline">support@habitflow.app</a></li>
                </ul>
                </div>
            </div>

            <div className="mt-8 text-center text-gray-400 text-xs border-t border-blue-700 pt-4">
                © {new Date().getFullYear()} HabitFlow. All rights reserved.
            </div>
        </footer>

    )
}

export default Footer