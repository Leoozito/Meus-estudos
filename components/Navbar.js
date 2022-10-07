import Link from "next/link"
import styles from '/styles/Navbar.module.css'
import Image from 'next/image'

export default function Navbar() {
    return (
        <>
        <div className={styles.Navbar}>
            <Image src="/../public/LogoDVR.png" width="85px" height="85px" alt="Logo da DVR"/>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="../about">
                <a>Sobre nós</a>
            </Link> 
            <Link href="/products">
                <a>Products</a>
            </Link>
            <Link href="/contacts"><a>Contato</a></Link>
        </div>
        </>
    )
}