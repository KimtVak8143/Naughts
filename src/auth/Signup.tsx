import React, {useState} from "react";
import { auth } from "../firebase/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";


export const Signup: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignup = async () => {
        try {
            // const auth = getAuth();
            await createUserWithEmailAndPassword(auth, email, password);
            navigate("/notes"); // Redirect to notes page after signup
        } catch (error) {
            console.error("Error signing up:", error);
            // console.error("Error signing up:", error.message);
            // alert("Error signing up. Please try again.");
        }
    };

    return (
        <div>
            <h2>Signup</h2>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSignup}>Sign Up</button>
        </div>
    );
};