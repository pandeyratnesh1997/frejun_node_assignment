import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Styled/navbar.module.css';



const Navbar = () => {
  return (
    <div className={styles.nav_container}>
        <Link to='/' className={styles.link}>All Blogs</Link>
       
        <Link to='/blog/create' className={styles.link}>Post New Blog</Link>

    </div>
  )
}

export default Navbar