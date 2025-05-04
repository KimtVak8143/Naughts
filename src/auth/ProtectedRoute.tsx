import React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase/firebaseConfig"; // Adjust the import path as necessary
import { useEffect, useState } from "react";

interface ProtectedRouteProps {
    children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user: any) => {
            setIsAuthenticated(!!user);
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    if (loading) return null; // or a loading spinner

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }
    return <>{children}</>;
}
