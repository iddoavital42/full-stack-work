import React, {useState} from 'react';
import axios from 'axios';
const ContactForm = () => {
const [formData, setFormData] = useState({
  name: '',
  email: '',
  message: '',
});

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await axios.post('http://localhost:4000/api/inquiries', formData);
    console.log('Form submitted successfully!');
    alert('Form submitted successfully!');
    setFormData({ name: '', email: '', message: '' });
  } catch (error) {
    console.error('Error submitting form:', error);
    alert('Error submitting form. Please try again.');
  }
};
  return (
   <div style={{ maxWidth: '500px', margin: '0 auto' }}>
    <h2>Contact Us</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
   </div>
  )
}

export default ContactForm