import type { NextPage } from 'next'
import Header from '../Components/Header'

import Head from 'next/head'
import Image from 'next/image'
const Home: NextPage = () => {
  return (

    <div className="bg-mainBg w-screen h-screen">
      <Head>
        <title>Video Blog - Next Js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <Header/>
    </div>
  )
}

export default Home
