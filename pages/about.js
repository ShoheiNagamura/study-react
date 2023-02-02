import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { MainImage } from '@/components/mainImage'
import Links from '@/components/links'
import { HeaderLogo } from '@/components/headerLogo'
import HeaderTitle from '@/components/headerTitle'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <div className={styles.description}>
          <HeaderTitle title="about" page="about" />

          <HeaderLogo />

        </div>

        <MainImage />

        <Links />

      </main>



    </>
  )
}
