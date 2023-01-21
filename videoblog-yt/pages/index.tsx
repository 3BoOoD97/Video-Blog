import type { NextPage } from 'next'
import Header from '../Components/Header'

import Head from 'next/head'
import Image from 'next/image'
const Home: NextPage = () => {
  return (

    <div className="bg-mainBg w-screen h-screen overflow-hidden flex flex-col">
      <Head>
        <title>Video Blog - Next Js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
    {/* Main Container */}
    
    <div className='bg-blue-400 w-full h-[calc(100%-80px)]'> </div>
    </div>
  )
}

export default Home
