import Link from "next/link"
import styles from '/styles/Footer.module.css'
import Image from 'next/image'

export default function Footer() {
    return (
        <>
        <footer className={styles.Footer}>
            <p>Copyright &copy; 2022 dvrg.com.br</p>
        </footer>
        </>
    )
}