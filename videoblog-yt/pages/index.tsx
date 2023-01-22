import type { NextPage } from 'next'
import Header from '../Components/Header'
import MenuItem from '../Components/MenuItem'
import {Chat, Dashboard, Favorite, LocalMovies, Logout, Stream, TrendingUp, TrendingUpRounded, VideogameAsset} from '@mui/icons-material'

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
    <div className=' w-full h-[calc(100%-80px)] flex'> 
    {/*Left Menu */}
    <div className='sm-w-[60%] min-w-[60px] md:w-[10%] h-full flex flex-col items-center
    justify-evenly '>
    <MenuItem icon={<Dashboard />} name={'Dashboard'}/>
    <MenuItem icon={<VideogameAsset />} name={'Games'}/>
    <MenuItem icon={<LocalMovies />} name={'Movies'}/>
    <MenuItem icon={<Stream />} name={'Streamer'}/>
    <MenuItem icon={<TrendingUp />} name={'Trending'}/>
    <MenuItem icon={<Chat />} name={'Messages'}/>
    <MenuItem icon={<Favorite />} name={'Favorite'}/>
    <MenuItem icon={<Logout/>} name={'Logout'}/>

    </div>
    {/* ---------- */}
    {/* Main Container */}
    <div className='md:w-[90%] h-full bg-red-700'></div>
    {/* ---------- */}
    </div>
    </div>
  )
}

export default Home
