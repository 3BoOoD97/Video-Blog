import type { NextPage } from 'next'
import Header from '../Components/Header'
import MenuItem from '../Components/MenuItem'
import {Chat, Dashboard, Favorite, LocalMovies, Logout, Stream, TrendingUp, TrendingUpRounded, VideogameAsset} from '@mui/icons-material'
import VideoContainer from '../Components/VideoContainer'
import Head from 'next/head'
import Image from 'next/image'
import RecommendedList from '../Components/RecommendedList'
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
    <div className='sm:w-[calc(100%-60px)] md:w-[90%] h-full '>
      
      {/* Top */}
      <div className='w-full h-[70%] max-h-[480px] grid grid-cols-3 gap-2 p-2'>

        {/*Video Container */}
      <div className='sm:col-span-6 md:col-span-2  rounded-lg
      overflow-hidden flex items-center justify-center'>
        <VideoContainer/>
      </div>

      {/* Recomnded Videos */}
      <div className='sm:col-span-6 md:col-span-1 bg-searchBg overflow-y-auto ease-in-out
        scrollbar scrollbar-thin scrollbar-thumb-gray-800 
      '>
          <p className='text-textColor text-[18px] font-bold my-2 p-2'>Recommeded</p>

      <div>
        <RecommendedList />

      </div>

      </div>

      </div>
          {/* ---------- */}

      {/* Bottom */}
      <div className='w-full h-[30%] bg-white'></div>
      {/* ---------- */}


    </div>
    {/* ---------- */}
    </div>
    </div>
  )
}

export default Home
