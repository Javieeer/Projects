import React, { useState } from 'react';
import './contacto.css';

const ContactBody = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    /* Envio de formulario en caso de necesitarse */
    console.log('Form data submitted:', formData);
  };

  return (
    <main className="contact-body">
      <section className="contact-info">
        <h2>Contacto</h2>
        <p><strong>Dirección:</strong> Conjunto residencial parque central, Apto 202 Torre 3, Ibagué - Tolima, Colombia</p>
        <p><strong>Teléfono:</strong> +57 302 313 7764</p>
        <p><strong>Email:</strong> zapatajavier34@gmail.com</p>
      </section>

      <section className="contact-form">
        <h2>Envíanos un mensaje</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Mensaje:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Enviar</button>
        </form>
      </section>
    </main>
  );
};

export default ContactBody;
