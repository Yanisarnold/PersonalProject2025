import personalData from '../data/personalDetails.json';
import { useState } from 'react';
import '../styles/Contact.css';
import errors from '../utility/errors';
// import { useState } from "react";
// import Banner from "../../components/commons/Banner/Banner";

const error = new errors();
function Contact() {
  // pulling user data from json file
  const personalDetails = personalData;
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });

  // React state to manage form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  // handling changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // Update the corresponding field in formData based on input's name
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handling submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Prevent page reload
    e.preventDefault();
    let newErrors = { name: '', email: '', message: '' };
    let isValid = true;
    // Validate name, email & message
    newErrors.name = error.setName(formData.name);
    newErrors.email = error.setEmail(formData.email);
    newErrors.message = error.setMessage(formData.message);
    setErrors(newErrors);
    if (isValid) {
      console.log(formData);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  // Render the contact form
  return (
    <div>
      <div className="container">
        <div className="contactBanner">
          <h1>Contact</h1>
          <p>Get in touch</p>
        </div>
        <div className="personalData">
          <h2>{personalDetails.name}</h2>
          <p>{personalDetails.email}</p>
          <p>{personalDetails.phone}</p>
        </div>
        <form onSubmit={handleSubmit} className="formData">
          <div className="formItems">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          <div className="formItems">
            <input
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="JohnDoe1@gmail.com"
              value={formData.email}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="formItems">
            <textarea name="message" onChange={handleChange} value={formData.message}></textarea>
            {errors.message && <span className="error">{errors.message}</span>}
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
