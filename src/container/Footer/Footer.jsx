import React, {useState } from 'react'
import './Footer.scss';

import { images } from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper';
import {client } from '../../client'

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
<h2 className="head-text">Ponte en contacto!</h2>

<div className="app__footer-cards">
  <div className="app__footer-card ">
    <img src={images.email} alt="email" />
    <a href="mailto:hello@micael.com" className="p-text">onikiriwrk@gmail.com</a>
  </div>
  <div className="app__footer-card">
    <img src={images.mobile} alt="phone" />
    <a href="https://twitter.com/Onikir1" target="_blank" className="p-text">@Onikir1</a>
  </div>
</div>
{!isFormSubmitted ? (
  <div className="app__footer-form app__flex">
    <div className="app__flex">
      <input className="p-text" type="text" placeholder="Tu Nombre" name="username" value={username} onChange={handleChangeInput} />
    </div>
    <div className="app__flex">
      <input className="p-text" type="email" placeholder="Tu Correo" name="email" value={email} onChange={handleChangeInput} />
    </div>
    <div>
      <textarea
        className="p-text"
        placeholder="Tu mensaje"
        value={message}
        name="message"
        onChange={handleChangeInput}
      />
    </div>
    <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
  </div>
) : (
  <div>
    <h3 className="head-text">
      Gracias por ponerte en contacto!
    </h3>
  </div>
)}
</>
);
};


export default AppWrap(MotionWrap(Footer, 'app__footer'),'Contacto' );