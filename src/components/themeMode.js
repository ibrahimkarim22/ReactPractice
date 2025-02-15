import {useState} from 'react';

// const Theme = () => {

//     const [btnName, setBtnName] = useState('dark');
//     const [textColor, setTextColor] = useState('white');
//     const [backColor, setBackColor] = useState('black'); 

// function setBackgroundColor() {
//     if (btnName === 'dark') {
//         setTextColor('white');
//         setBackColor('black');
//         setBtnName('light');
//     } else {
//         setTextColor('black');
//         setBackColor('white');
//         setBtnName('dark');
//     }
// }

//     return (
//         <div style={{backgroundColor: backColor}}>
//             <h2 style={{color: textColor}}>text is white</h2>
//          <button onClick={setBackgroundColor}>{btnName}</button> 
//        </div>
//     )
// }


const Theme = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);


    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode)
    }


    return (
        <div 
        style={{
            backgroundColor: isDarkMode ? "black" : "white",
            color: isDarkMode ? "white" : "black",
            height: "100vh", 
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        }}
    >
        <h2>{isDarkMode ? "Dark Mode" : "Light Mode"}</h2>
        <button onClick={toggleTheme}>
            {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
    </div>
);
}

export default Theme;