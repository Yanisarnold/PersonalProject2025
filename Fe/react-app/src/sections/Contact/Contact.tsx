import personalData from "../../data/personalDetails.json";
import { useState } from "react";
import "./Contact.css"
import Banner from "../../components/commons/Banner/Banner";
function Contact() {
      // pulling user data from json file
      const personalDetails = personalData;
      const [errors, setErrors] = useState({
              name: "",
            email: "",
            message: "",
      })
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
            setFormData({
                  ...formData,
                  [e.target.name]: e.target.value,
            });
      };
      // handling submit 
      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
            // Prevent page reload
            e.preventDefault();
            // console.log object
            console.log(formData);
            setFormData({
                        name: "",
            email: "",
            message: "",
            })
      };
      return (
            <div>
                  {/* <Banner pageTitle="Christ Youzan" /> */}
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
                              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required/>
                              <input type="email" name="email" onChange={handleChange} placeholder="JohnDoe1@gmail.com" value={formData.email} />
                              <textarea name="message" onChange={handleChange} value={formData.message} ></textarea>
                              <button type="submit">Send</button>
                        </form>
                  </div>
            </div>
      )
}

export default Contact;