import { useState, useEffect, useRef } from "react";

const UserForm = () => {
    const [name, setName] = useState(() => localStorage.getItem("NAME") || "");
    const [email, setEmail] = useState(() => localStorage.getItem("EMAIL") || "");
    const [password, setPassword] = useState(() => localStorage.getItem("PASSWORD") || "");

    const nameInputRef = useRef();


    const isNameValid = name.length >= 4;
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid = password.length >= 6;

    const isFormValid = isNameValid && isEmailValid && isPasswordValid;


    useEffect(() => {
        if (isFormValid) {
            localStorage.setItem("NAME", name);
            localStorage.setItem("EMAIL", email);
            localStorage.setItem("PASSWORD", password);
        }
    }, [name, email, password, isFormValid]);

    const submit = (e) => {
        e.preventDefault();
        if (isFormValid) {
            console.log("Submitted", { name, email, password });
            alert("Form submitted successfully!");
        }
    };

    const reset = () => {
        setName('');
        setEmail('');
        setPassword('');
        localStorage.removeItem('NAME');
        localStorage.removeItem('EMAIL');
        localStorage.removeItem('PASSWORD')

        nameInputRef.current.focus();
    }

    return (
        <>
            <h2>User Registration Form</h2>
            <form onSubmit={submit}>
                <label>
                    Name:
                    <input ref={nameInputRef} type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                {!isNameValid && <p style={{ color: "red" }}>Name needs to be at least 4 characters</p>}
                <label>
                    Email:
                    <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                {!isEmailValid && <p style={{ color: "red" }}>Please enter a valid email</p>}

                <label>
                    Password:
                    <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                {!isPasswordValid && <p style={{ color: "red" }}>Password must be at least 6 characters long</p>}

                <button type="submit" disabled={!isFormValid}>Submit</button>
                <button onClick={reset}>reset</button>
            </form>
        </>
    );
};

export default UserForm;