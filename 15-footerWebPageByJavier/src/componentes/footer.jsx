import React, { useEffect, useState } from 'react';
import './footer.css';
import SocialCircle from './SocialCircle';

const FooterJavi = () => {
  /* Hora en tiempo real */
  const [realTime, setRealTime] = useState('');

  const formatTime12H = (time) => {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${ampm}`;
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const formattedTime = formatTime12H(now);
      setRealTime(formattedTime);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  /* Redes sociales */
  const socialLinks = [
    { name: 'facebook', url: 'https://www.facebook.com/javier.zapata.9828/' },
    { name: 'instagram', url: 'https://www.instagram.com/javier.zapata99/' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/javieerzapata/' },
    { name: 'youtube', url: 'https://www.youtube.com/@javieralejandrozapata7720' },
    { name: 'gmail', url: '#' },
    { name: 'whatsapp', url: '#' },
  ];

  return (
    <footer>
      <section className="social-links">
        {socialLinks.map((link) => (
          <SocialCircle key={link.name} {...link} />
        ))}
      </section>
      <section className="clock1">
        <div className='clock2'>
          <h3>Esta es la hora en tiempo real en Colombia:</h3>
          <h3>{realTime}</h3>
        </div>
        <section className="copyright">
          <p>&copy; 2024 Estudio 4A, diseñado por Javier Zapata</p>
        </section>
      </section>
    </footer>
  );
};

export default FooterJavi;
