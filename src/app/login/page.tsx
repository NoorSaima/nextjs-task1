"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "../login.module.css";

export default function Login(){
    const router = useRouter();
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        if (!email || !password) {
            setError("Please fill in all fields");
            return;
        }

        // Check password with env variable
        const correctPassword = process.env.NEXT_PUBLIC_APP_PASSWORD || "abc123";
        
        if (password === correctPassword) {
            setError("");
            alert(`Login successful! Email: ${email}`);
            router.push("/");
        } else {
            setError("Invalid password. Please try again.");
            setPassword("");
        }
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleLogin();
        }
    }

    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginBox}>
                <h1 className={styles.loginTitle}>Login</h1>
                
                {error && <div style={{ color: '#d32f2f', marginBottom: '15px', padding: '10px', backgroundColor: '#ffebee', borderRadius: '5px' }}>{error}</div>}
                
                <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Email</label>
                    <input 
                        type="email" 
                        className={styles.loginInput}
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Password</label>
                    <input 
                        type="password" 
                        className={styles.loginInput}
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                </div>
                 <h5>Enter the password abc123 and use any email.</h5>
                <button className={styles.loginButton} onClick={handleLogin}>Login</button>
                
                
            </div>
        </div>
    )
}


