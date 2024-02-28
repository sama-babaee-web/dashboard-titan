import React, { useContext, useEffect, useState } from 'react'
import styles from './Sidebar.module.css'
import { personsImgs } from '../../utils/images'
import { navigationLinks } from '../../data/data'
import { SidebarContext } from '../../context/sidebarContext'


function Sidebar() {

    const [activeLinkIdx] = useState(1);
    const [sidebarClass, setSidebarClass] = useState("");
    const { isSidebarOpen } = useContext(SidebarContext);
    useEffect(() => {
        if (isSidebarOpen) {
            setSidebarClass(`${styles.sidebarChange}`)
        } else {
            setSidebarClass('');
        }
    }, [isSidebarOpen])

    return (
        <div className={` ${styles.sidebar} ${sidebarClass} `}>
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
                                <a href="#" className={`${styles.navLink} ${navigationLink.id === activeLinkIdx ? 'active' : null}
                                 d-flex align-items-center justify-content-start`}>
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