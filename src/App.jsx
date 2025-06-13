import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import ForgetPassword from "./pages/ForgetPassword"

// authenticating
import { AuthProvider } from "./auth/AuthContext"

//pages backend
import Dashboard from "./components/dashboard/Dashboard"

function App(){
    return(
       <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/signup" element={<Signup/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/forget-password" element={<ForgetPassword/>}/>
                    
                    {/* backend routes */}
                    <Route path="/dashboard" element={<Dashboard/>}/>
                </Routes>
            </Router>
        </AuthProvider>
    )
}

export default App