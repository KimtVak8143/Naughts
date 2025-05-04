// import { auth } from './firebase/firebaseConfig'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './auth/Login';
import { Signup } from './auth/Signup';
import { Logout } from './auth/Logout';
import { Notes } from './pages/Notes';
import { ProtectedRoute } from './auth/ProtectedRoute';

// if (process.env.NODE_ENV === 'development') {
//   console.log("Firebase Auth", auth);
// }

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<Logout />} />

        {/* Protected Routes */}
        <Route 
          path="/notes" 
          element={
            <ProtectedRoute>
              <Notes />
            </ProtectedRoute>
          }
        />

        {/* Home Page */}
        <Route path="/" element={<h1>Welcome to Naughts</h1>} />
      </Routes>
    </Router>
  );
};

export default App
