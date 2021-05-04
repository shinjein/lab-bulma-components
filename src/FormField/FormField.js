import React from 'react';
import 'bulma/css/bulma.css';
import './FormField.css';

function FormField({label, type, placeholder}) {
    return (
    // <div>
    //     <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
    //     <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
    // </div>
        <div className="field">
        <label className="label">{label}</label>
        <div className="control">
            <input className="input" type={type} placeholder={placeholder} />
        </div>
        </div>
    );
  };

export default FormField; 