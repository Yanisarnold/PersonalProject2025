import personalData from "../../data/personalDetails.json";
import { useState } from "react";
import "./Contact.css"
import Banner from "../../components/commons/Banner/Banner";
function Contact() {
      const personalDetails = personalData;
      const [formData, setFormData] = useState({
            name: "",
            email: "",
            message: "",
      });
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setFormData({
                  ...formData,
                  [e.target.name]: e.target.value,
            });
      };
      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            console.log(formData);
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
                              <input type="text" name="name" onChange={handleChange} />
                              <input type="email" name="email" onChange={handleChange} />
                              {/* <textarea name="message" onChange={handleChange}></textarea> */}
                              <button type="submit">Send</button>
                        </form>
                  </div>
            </div>
      )
}

export default Contact;