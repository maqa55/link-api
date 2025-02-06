import React, { useState, useEffect } from 'react';

const About = () => {
  const [pro, setPro] = useState([]);

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
    <div>
      {pro.length > 0 ? (
        pro.map(item => (
          <div key={item.id}>{item.title}
          <h1>{item.userId}</h1>
          <h1>{item.id}</h1>
          <h1>{item.body}</h1>
          </div>
        ))
      ) : (
        <div>No items available</div>
      )}
    </div>
  );
};

export default About;
