import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'



const inter = Inter({ subsets: ['latin'] })

export function HeaderTitle(props) {

    return (
        <p>
            Get started by {props.page}&nbsp;
            {props.children}
        </p>
    )
}
