import React, {useState} from "react";
import { auth } from "../firebase/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";


export const Login: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            // const auth = getAuth();
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/notes"); // Redirect to notes page after login
        } catch (error) {
            console.error("Error logging in:", error);
            // console.error("Error logging in:", error.message);
            // alert("Error logging in. Please try again.");
        }
    };

    return (
        <div>
            <h2>Login</h2>
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
            <button onClick={(handleLogin)}>Log In</button>
        </div>
    );
};