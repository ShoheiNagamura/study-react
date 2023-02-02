import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'



const inter = Inter({ subsets: ['latin'] })

export default function HeaderTitle(props) {
    console.log(props.title)

    return (
        <p>
            Get started by {props.title}&nbsp;
            <code className={styles.code}>pages/{props.page}.js</code>
        </p>
    )
}
