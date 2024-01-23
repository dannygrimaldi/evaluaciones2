import Layout from './components/Layout'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Course from './pages/Course'
import Profile from './pages/Profile'
import Login from './pages/LoginPage';
import { AuthProvider } from './context/AuthContext'
import PrivateRoute from './utils/PrivateRoute'


function App() {
    return (
        <Router>
            <AuthProvider>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/course' element={<PrivateRoute><Course /></PrivateRoute>} />
                    <Route path='/profile' element={<PrivateRoute><Profile /></PrivateRoute>} />
                    <Route path='/login' element={<Login />} />
                </Routes>
            </Layout>
            </AuthProvider>
        </Router>
    )
}

export default App
