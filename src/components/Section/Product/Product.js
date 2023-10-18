import { Divider } from 'antd'
import React from 'react'
import styles from "./style.module.scss"

const ProductList = () => {
    return (
        <>
            <header><h2>Top Products</h2></header>
            <div className={styles.rowsWrapper}>
                <h3 style={{ margin: 0 }}>Restaurant Booking App</h3>
                <div className={styles.customRow}>
                    <p>React & Bootstrap Framework</p>
                    <h3>70 <span>sales</span></h3>
                </div>
            </div>
            <Divider />
            <div className={styles.rowsWrapper}>
                <h3 style={{ margin: 0 }}>UI Kit</h3>
                <div className={styles.customRow}>
                    <p>React & Bootstrap Framework</p>
                    <h3>54 <span>sales</span></h3>
                </div>
            </div>
            <Divider />
            <div className={styles.rowsWrapper}>
                <h3 style={{ margin: 0 }}>Design System Pro</h3>
                <div className={styles.customRow}>
                    <p> Bootstrap Framework</p>
                    <h3>47 <span>sales</span></h3>
                </div>
            </div>
            <Divider />
            <div className={styles.rowsWrapper}>
                <h3 style={{ margin: 0 }}>Dashboard</h3>
                <div className={styles.customRow}>
                    <p>Tailwind & React</p>
                    <h3>43 <span>sales</span></h3>
                </div>
            </div>
            <Divider />
            <div className={styles.rowsWrapper}>
                <h3 style={{ margin: 0 }}>Glassmorphism UI</h3>
                <div className={styles.customRow}>
                    <p>Vue Js & Tailwind</p>
                    <h3>38 <span>sales</span></h3>
                </div>
            </div>
            <Divider />
            <div className={styles.rowsWrapper}>
                <h3 style={{ margin: 0 }}>Multipurpose Template</h3>
                <div className={styles.customRow}>
                    <p>React & Bootstrap Framework</p>
                    <h3>22 <span>sales</span></h3>
                </div>
            </div>
            <Divider />
        </>
    )
}

export default ProductList