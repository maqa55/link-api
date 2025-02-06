import React, { useEffect, useState } from 'react';
import './contact.scss';

function About() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        const updatedUsers = data.map(user => ({
          ...user,
          photoUrls: [
            `https://picsum.photos/200/300?random=${Math.floor(Math.random() * 1000)}`,
          ]
        }));
        setUsers(updatedUsers);
      })
      .catch(error => console.error('API hatası:', error));
  }, []);

  return (
    <div className="about-container">
      <h1>Users</h1>
      <div className="grid-container">
        {users.map(user => (
          <div key={user.id} className="grid-item">
            <h3>{user.name}</h3>
            <h4>{user.username}</h4>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.website}</p>
            <div><strong>Company:</strong> {user.company?.name}
            <h1>{user.company?.bs}</h1>
            </div>
            
            <div className="photo-container">
              {user.photoUrls.map((photoUrl, index) => (
                <img key={index} src={photoUrl} alt={`${user.name} photo ${index + 1}`} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
