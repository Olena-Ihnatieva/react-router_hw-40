import {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';

import styles from '../styles.module.css';

export default function Albums() {
  const [albums, setAlbums] = useState([]);
  const [user, setUser] = useState({});
  const {userId} = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => response.json())
      .then(data => setUser(data));

    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
      .then(response => response.json())
      .then(data => setAlbums(data.slice(0, 3)));
  }, [userId]);

  return (
    <>
      <h3 className={styles.title}>{user.name}'s Albums</h3>
      <ul>
        {albums.map(album => (
          <li key={album.id} className={styles.album}>
            {album.title}
            <Link
              to={`/photos/${album.id}`}
              className={styles.btn}
            >
              Photos
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
