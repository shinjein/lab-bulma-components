import React from 'react';
import FormField from '../FormField/Formfield';
import Navbar from '../navbar/Navbar';
import CoolButton from '../CoolButton/CoolButton';
import "bulma/css/bulma.css";
import "./Signup.css";

const Signup = () => {
  return (
    <div>
      <Navbar />
      <form>
        <FormField label="Name" type="text" placeholder="Alex"/>
        <FormField label="Email" type="email" placeholder="hi" />
      </form>
      <CoolButton isSmall isDanger className="is-rounded my-class">Button</CoolButton>
    </div>
    )   
};

export default Signup;