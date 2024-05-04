import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

import styles from '../styles.module.css';

export default function Photos() {
  const [photos, setPhotos] = useState([]);
  const [user, setUser] = useState({});
  const {albumId} = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}`)
      .then(response => response.json())
      .then(data => {
        fetch(`https://jsonplaceholder.typicode.com/users/${data.userId}`)
          .then(response => response.json())
          .then(userData => setUser(userData));
      });

    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then(response => response.json())
      .then(data => setPhotos(data.slice(0, 3)));
  }, [albumId]);

  return (
    <>
      <h3 className={styles.title}>{user.name}'s Photos</h3>
      <div className={styles.wrapper}>
        {photos.map(photo => (
          <img key={photo.id} className={styles.photo} src={photo.thumbnailUrl} alt={photo.title} />
        ))}
      </div>
    </>
  );
}