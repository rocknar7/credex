import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', licenseType: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted successfully!');
    setFormData({ name: '', email: '', company: '', licenseType: '', message: '' });
  };

  return (
    <div className="bg-blue-100 p-10 rounded-lg mb-8">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="p-2 rounded" required />
        <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="p-2 rounded" required />
        <input name="company" value={formData.company} onChange={handleChange} placeholder="Company" className="p-2 rounded" required />
        <select name="licenseType" value={formData.licenseType} onChange={handleChange} className="p-2 rounded">
          <option value="">Select License Type</option>
          <option value="Software">Software</option>
          <option value="Service">Service</option>
        </select>
        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" className="p-2 rounded" required></textarea>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
