import { Inter } from '@next/font/google';
import Link from 'next/link'
import styles from './headerLink.module.css';


const inter = Inter({ subsets: ['latin'] })

export function HeaderLink(props) {
    return (
        <div className={styles.headerLink}>

            <Link href="/" legacyBehavior>
                <a className={styles.anchor}>Index</a>
            </Link>

            <Link href="/about" legacyBehavior>
                <a className={styles.anchor}>About</a>
            </Link>

        </div >
    )
}
