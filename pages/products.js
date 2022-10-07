import Image from "next/image"
import styles from "../styles/Products.module.css"

export default function Products() {
    return (
        <>
        <h1>Página de Produtos</h1>
        <div className={styles.imgleft}>
            <p>Prensa Hidraulica para Placas Mercosul</p>
            <Image src="/../public/foto-prensa.png" width="100" height="200" alt="prensa hidráulica"/>
        </div>
            
        <div className={styles.imgright}>
            <p>Matrizes Alfanúmericas Mercosul</p>
            <Image src="/../public/Matrizes.png" width="200" height="200" alt="Matrizes Alfanúmericas"/>
        </div>
            
        <div className={styles.imgleftdown}>
            <p>HotStamp para Placas Mercosul</p>
            <Image src="/../public/HotStamp.png" width="200" height="200" alt="HotStamp"/>
        </div>
            
        <div className={styles.imgrightdown}>
        <p>Prensa Hidráulica Inteligente</p>
            <Image src="/../public/prensa-inteligente.png" width="100" height="200" alt="prensa inteligente"/>
        </div>
        </>
    )
}