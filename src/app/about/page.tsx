import Link from "next/link"
import styles from "../login.module.css";

export default function About(){
 return(
     <div className={styles.aboutContainer}>
        <div className={styles.aboutBox}>
            <h1 className={styles.aboutTitle}>Welcome to the About Page</h1>
            <p className={styles.aboutContent}>
                ......................................
                .................................................
            </p>
            <div style={{ textAlign: 'center' }}>
                <Link href="/" className={styles.aboutLink}>Back to Home</Link>
            </div>
        </div>
     </div>
 )
};

export function generateMetadata(){
    return {
       title:"About Page"
    }
}