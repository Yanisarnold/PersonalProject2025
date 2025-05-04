import personalData from "../../data/personalDetails.json";
import { useState } from "react";
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
               <div className="container">
                        <h1>Contact</h1>
                        <div>
                              <h1>Get in touch</h1>
                              <h2>{personalDetails.name}</h2>
                              <p>{personalDetails.email}</p>
                              <p>{personalDetails.phone}</p>
                        </div>
                        <form onSubmit={handleSubmit}>
                              <input type="text" name="name" onChange={handleChange} />
                              <input type="email" name="email" onChange={handleChange} />
                              <textarea name="message" onChange={handleChange}></textarea>
                              <button type="submit">Send</button>
                        </form>
                  </div>
            </div>
      )
}

export default Contact;