import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./Contact.module.css";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isFormValid, setIsFormValid] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (name === 'phone') {
      e.target.value = formatPhoneNumber(value);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      sendToWhatsApp();
    }
  };

  const validateForm = (): boolean => {
    const inputs = document.querySelectorAll('input');
    let isValid = true;

    inputs.forEach((input) => {
      if (!input.checkValidity()) {
        input.classList.add(styles.invalid);
        isValid = false;
      } else {
        input.classList.remove(styles.invalid);
      }
    });

    setIsFormValid(isValid);
    return isValid;
  };

  const formatPhoneNumber = (phone: string): string => {
    const phoneNumber = phone.replace(/\D/g, '').substring(0, 11);
    if (phoneNumber.length < 11) {
      return phoneNumber.replace(/^(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
    } else {
      return phoneNumber.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }
  };

  const sendToWhatsApp = () => {
    const { name, phone, email, message } = formData;
    const text = `Nome: ${name}\nE-mail: ${email}\nTelefone: ${phone}\nMensagem: ${message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappNumber = '5581999510178';
    const url = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className={styles.sectionContact}>
      <div className={styles.containerContact}>
        <h2>Contato</h2>
        <form onSubmit={handleSubmit} className={styles.formPage} noValidate>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Nome</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <div className={styles.colDiv}>
              <label htmlFor="phone" className="form-label">Telefone</label>
              <input
                type="text"
                className="form-control"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.colDiv}>
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Mensagem</label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">Enviar</button>
          </div>
        </form>
        {!isFormValid && <p className={styles.error}>Por favor, preencha todos os campos corretamente.</p>}
      </div>
    </section>
  );
};

export default Contact;
