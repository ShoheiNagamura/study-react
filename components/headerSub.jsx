import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { HeaderLogo } from '@/components/headerLogo'
import { HeaderTitle } from '@/components/headerTitle'


const inter = Inter({ subsets: ['latin'] })

export function HeaderSub(props) {
    return (
        <>
            <div className={styles.description}>
                <HeaderTitle page={props.title}>
                    {<code className={styles.code}>pages/{props.page}.js</code>}
                </HeaderTitle>

                <HeaderLogo />
            </div>
        </>
    )
}
