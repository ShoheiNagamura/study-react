import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './mainImage.module.css'
import { useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export function MainImage() {

    return (
        <div className={styles.center}>
            <Image
                className={styles.logo}
                src="/next.svg"
                alt="Next.js Logo"
                width={180}
                height={37}
                priority
            />
            <div className={styles.thirteen}>
                <Image
                    src="/thirteen.svg"
                    alt="13"
                    width={40}
                    height={31}
                    priority
                />
            </div>
        </div>
    )
}
