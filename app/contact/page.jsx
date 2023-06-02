import styles from '../../styles/contact.module.css'
import React from 'react';

const ContactPage = () => {
    return (
        <div className={styles.container}>
            <h1>Contact Us</h1>
            <form className={styles.form}>
                <label className={styles.input} htmlFor="name">Name:</label>
                <input className={styles.input} type="text" id="name" name="name" />

                <label className={styles.input} htmlFor="email">Email:</label>
                <input className={styles.input} type="email" id="email" name="email" />

                <label className={styles.input} htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="4"></textarea>

                <button type="submit" className={styles.button}>Submit</button>
            </form>
        </div>
    );
};

export default ContactPage;