import Head from 'next/head'
import { Alexandria, Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { MainImage } from '@/components/mainImage/mainImage'
import { Links } from '@/components/Links/links'
import { HeaderSub } from '@/components/headerSub/headerSub'
import { useCallback } from 'react'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {


  const handleClick = useCallback((e) => {
    e.preventDefault();
    alert("aaa")
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>

        <HeaderSub page="index" />

        <MainImage />

        <a href="/about" onClick={handleClick}>
          ボタン
        </a>

        <Links />

      </main >
    </>
  )
}
