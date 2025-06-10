import personalData from "../../data/personalDetails.json";
import { useState } from "react";
import "./Contact.css"
// import Banner from "../../components/commons/Banner/Banner";
function Contact() {
      // pulling user data from json file
      const personalDetails = personalData;
      const [errors, setErrors] = useState({ name: "", email: "", message: "", });

     // React state to manage form inputs
      const [formData, setFormData] = useState({
            name: "",
            email: "",
            message: "",
      });
      // handling changes 
      const handleChange = (
            e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
           // Update the corresponding field in formData based on input's name
            setFormData({ ...formData, [e.target.name]: e.target.value, });
      };
      // handling submit 
      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
                 // Prevent page reload
            e.preventDefault();
            let newErrors = { name: "", email: "", message: "", };
            let isValid = true;
            
            if (!formData.name) {
                  newErrors.name = "Name is required.";
                  isValid = false;
            }

            if (!formData.email) {
                  newErrors.email = "Email is required.";
                  isValid = false;
                  // 
            } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
                  newErrors.email = "Email is invalid.";
                  isValid = false;
            }

            if (!formData.message) {
                  newErrors.message = "Message is required.";
                  isValid = false;
            }

            if (formData.message && formData.message.length < 10) {
                  newErrors.message = "Message must be at least 10 characters.";
                  isValid = false;
            }

            setErrors(newErrors);
            if (isValid) {
            console.log(formData);
            setFormData({ name: "", email: "", message: "", })     
            }
      };
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
                              <div style={{ display: 'flex', flexDirection: 'column' }}>
                              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe"  />
                                    {errors.name && <span className="error" style={{ color: 'red' }}>{errors.name}</span>}
                              </div>
                             
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <input type="email" name="email" onChange={handleChange} placeholder="JohnDoe1@gmail.com" value={formData.email} />
                                    {errors.email && <span className="error" style={{ color: 'red' }}>{errors.email}</span>}
                              </div>
                              <div style={{ display: 'flex', flexDirection: 'column' }}>
                              <textarea name="message" onChange={handleChange} value={formData.message} ></textarea>
                                {errors.message && <span className="error" style={{ color: 'red' }}>{errors.message}</span>}
                              </div>
                              <button type="submit">Send</button>
                        </form>
                  </div>
            </div>
      )
}

export default Contact;