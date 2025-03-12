import React, { useState, useEffect } from 'react'; 
import axios from 'axios'; 
// This file contains temporary provsion fpr backend frontend connection
// Should not be touched
const Prediction = () => {
    const [message, setMessage] = useState(''); 

    // Fetch data from Flask backend
    useEffect(() => {
        axios.get('http://127.0.0.1:5000/')
            .then(response => {
                setMessage(response.data); // Assuming Flask sends back a message like 'Hello from Flask!'
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []); 
    return (
        <>
            <div className="App">
                <h1>Message from Flask Backend:</h1>
                <p>{message}</p>
            </div>
        </>
    );
}

export default Prediction;
