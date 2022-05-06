import React from 'react';
import './App.css';

function TextBox(props : any) {
    return (
        <div className="TextBox">
            <label>
                <p>
                    {props.label}
                </p>
            </label>
        </div>
    );
}


export default TextBox