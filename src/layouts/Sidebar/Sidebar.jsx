import React from 'react'
import styles from './Sidebar.module.css'
import logo from '../../assets/images/logo/titan-logo.png'
import { personsImgs } from '../../utils/images'
import { navigationLinks } from '../../data/data'
function Sidebar() {
    return (
        <div className={` ${styles.sidebar} ${styles.sidebarChange}`}>
            <div className="user-info d-flex justify-content-start align-items-center gap-3">
                <div className={`${styles.infoImg} img-fit-cover`}>
                    <img src={personsImgs.person_two} alt="profile image" />
                </div>
                <span className={`${styles.infoName}`}>
                    سما بابایی
                </span>
            </div>
            <nav className={styles.navigation}>
                <ul className='nav-list ps-0'>
                    {
                        navigationLinks.map((navigationLink) => (
                            <li className={`${styles.navItem} mb-3`} key={navigationLink.id}>
                                <a href="#" className={`${styles.navLink} d-flex align-items-center justify-content-start`}>
                                    <img src={navigationLink.image} className={styles.navLinkIcon} alt={navigationLink.title} />
                                    <span className={styles.navLinkText}>
                                        {
                                            navigationLink.title
                                        }
                                    </span>
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar