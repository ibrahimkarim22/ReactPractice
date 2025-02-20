import {useState} from 'react';

const PasswordChecker = () => {

    const [pass, setPass] = useState('');

    let strength = '';
    let color = '';

    if (pass.length > 10) {
        strength = 'Strong';
        color = 'green'
    } else if (pass.length >= 6 && pass.length <= 10) {
        strength = 'Medium';
        color = 'orange';
    } else if (pass.length > 0) {
        strength = 'Weak';
        color = 'red';
    }
    

    return(
        <>
        <h1>Password Strength Checker</h1>


        <label>
            Enter Password
            <input 
            type='password' 
            value={pass} onChange={(e) => setPass(e.target.value)} 
            placeholder='type here...' />
        </label>
            
           {pass.length > 0 && <p style={{color}}>{strength}</p>}

            
        </>
    )
};

export default PasswordChecker;