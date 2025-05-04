import { useEffect } from "react";
import { auth } from "../firebase/firebaseConfig"; // Adjust the import path as necessary
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Logout: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const doLogout = async () => {
            await signOut(auth);
            navigate("/login"); // Redirect to login page after logout
        };

        doLogout();
    }, [navigate]);
    // console.log("Logging out...");
    return <p>Logging Out........</p>; // or a loading spinner
};