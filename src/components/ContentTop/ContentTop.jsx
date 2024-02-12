import React, { useContext } from 'react'
import styles from './ContentTop.module.css'
import { SidebarContext } from '../../context/sidebarContext'
import { iconsImgs } from '../../utils/images'

function ContentTop() {
    const { toggleSidebar } = useContext(SidebarContext)
    return (
        <div className={`${styles.mainContentTop} d-flex justify-content-between align-items-center mb-3`}>
            <div className={`${styles.contentTopLeft} d-flex align-items-center` }>
                <button type='button' className={`${styles.sidebarToggler} d-flex align-items-center me-3`} onClick={() => toggleSidebar()}>
                    <img src={iconsImgs.menu} alt="" />
                </button>
                <h3 className={styles.contentTopTitle}> داشبورد </h3>
            </div>

            <div className={styles.contentTopBtns}>
                <button type="button" className={`  ${styles.searchBtn} ${styles.contentTopBtn} `}>
                    <img src={iconsImgs.search} alt="" />
                </button>   
                <button className={`${styles.notificationBtn}  ${styles.contentTopBtn} `}>
                    <img src={iconsImgs.bell} alt="" />
                    <span className={styles.NotificationBtnDot}></span>
                </button>
            </div>
        </div>
    )
}

export default ContentTop