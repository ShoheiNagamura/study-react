import Head from 'next/head'
import { Alexandria, Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { MainImage } from '@/components/mainImage/mainImage'
import { Links } from '@/components/Links/links'
import { HeaderSub } from '@/components/headerSub/headerSub'
import { useCallback, useEffect, useState } from 'react'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [count, setCount] = useState(1);

  const handleClick = useCallback(() => {
    if (count < 10) {
      setCount((count) => count + 1);
    }
  }, [count]);

  useEffect(() => {
    // マウント時の処理
    document.body.style.backgroundColor = 'green';
    // アンマウント時の処理 returnで関数を返すことでアンマウントさせる
    return () => {
      document.body.style.backgroundColor = '';

    }
  }, [count])

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
        <h1>{count}</h1>
        <button onClick={handleClick}>
          ボタン
        </button>

        <Links />

      </main >
    </>
  )
}
