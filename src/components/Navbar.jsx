import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar bg-white shadow-lg">
            <div className="container mx-auto p-2  text-gray-800">
                <div className="flex justify-between items-center px-2">
                    <div>
                        <Link to="/" className="p-2 cursor-pointer rounded-sm">
                            Home
                        </Link>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Link to="/signup" className="bg-blue-400 p-2 cursor-pointer hover:bg-blue-600 rounded-sm">
                            Signup
                        </Link>
                        <Link to="/login" className="border p-2 border-blue-400 hover:bg-blue-600 cursor-pointer rounded-sm">
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
