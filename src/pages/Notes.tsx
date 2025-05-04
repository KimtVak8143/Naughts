import React from "react";
import { useNavigate } from "react-router-dom";

export const Notes: React.FC = () => {
    const navigate = useNavigate();
    
    const handleLogout = () => {
        navigate("/logout"); // Redirect to logout page
    };

    return (
        <div style={{ padding: "2rem" }}>
            <h1 style={{ marginBottom: "1rem" }}>Naughts</h1>
            <h1>Notes</h1>
            <p>This is the notes page.</p>
            {/* Add your notes functionality here */}

            <button onClick={handleLogout} style={{ marginTop: "1rem" }}>Logout</button>
            
        </div>
    );
};