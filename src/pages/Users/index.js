import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import styles from '../styles.module.css';

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data.slice(0, 3)));
  }, []);

  return (
    <>
      <h3 className={styles.title}>Users</h3>
      <div className={styles.wrapper}>
        {users.map(user => (
          <p key={user.id} className={styles.user}>
            {user.name}
            <Link
              to={`/albums/${user.id}`}
              className={styles.btn}
            >
              Albums
            </Link>
          </p>
        ))}
      </div>
    </>
  );
}