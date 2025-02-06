import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './about.scss';

const About = () => {
  const [pro, setPro] = useState([]);
  const mode = useSelector(state => state.darkMode.mode); 
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (!response.ok) {
          throw new Error('API istek hatası');
        }
        return response.json();
      })
      .then(data => {
        setPro(data);
      })
      .catch(error => {
        console.error('API hatası:', error);
      });
  }, []);

  return (
    <div className={`about-container ${mode === 'dark' ? 'dark' : 'light'}`}>
      {pro.length > 0 ? (
        pro.map(item => (
          <div key={item.id} className="post-item">
            <h1>{item.title}</h1>
            <h2>User ID: {item.userId}</h2>
            <p>{item.body}</p>
          </div>
        ))
      ) : (
        <div>No items available</div>
      )}
    </div>
  );
};

export default About;
