import React, { useState } from 'react';

const RegistrationForm = () => { 

 const [formData, setFormData] = useState({ 

 name: '', 

 email: '', 

 password: '', 

 confirmPassword: '', 

 age: '' 

 });

 const handleChange = (e) => { 

 const { name, value } = e.target;

 setFormData({ 

 ...formData, 

 [name]: value 

 });

 };

 const handleSubmit = (e) => { 

 e.preventDefault();

 if (formData.password !== formData.confirmPassword) { 

 alert('Passwords do not match!');

 return;

 } 

 alert('Registration successful!');

 };

  return ( 

 <div style={{ textAlign: 'center', marginTop: '20px' }}> 

 {/* Name and UEN at the top */} 

 <p><strong>Name:</strong> D Suresh</p> 

 <p><strong>UEN:</strong> RTU24101IT019</p> 

 <h2>Registration Form</h2> 

 <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto' }}> 

 <div className="form-group"> 

 <label>Name:</label> 

 <input 

 type="text" 

 name="name" 

 value={formData.name} 

 onChange={handleChange} 

 required 

 /> 

 </div> 

 <div className="form-group"> 

 <label>Email:</label> 

 <input 

 type="email" 

 name="email" 

 value={formData.email} 

 onChange={handleChange} 

 required 

 /> 

 </div>
<div className="form-group"> 

 <label>Password:</label> 

 <input 

 type="password" 

 name="password" 

 value={formData.password} 

 onChange={handleChange} 

 required 

 /> 

 </div> 

 <div className="form-group"> 

 <label>Confirm Password:</label> 

 <input 

 type="password" 

 name="confirmPassword" 

 value={formData.confirmPassword} 

 onChange={handleChange} 

 required 

 /> 

 </div> 

 <div className="form-group"> 

 <label>Age:</label> 

 <input 

 type="number" 

 name="age" 

 value={formData.age} 

 onChange={handleChange} 

 required 

 />
   </div> 

 <div className="button"> 

 <button type="submit">Register</button> 

 </div> 

 </form> 

 </div> 

 );

};

export default RegistrationForm;
   
