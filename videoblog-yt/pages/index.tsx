import {
  Chat,
  Dashboard,
  Favorite,
  LocalMovies,
  Logout,
  Stream,
  TrendingUp,
  VideogameAsset,
} from "@mui/icons-material";
import Head from "next/head";
import { useEffect, useState } from "react";
import Collection from "../Components/Collection";
import Header from "../Components/Header";
import Menu from "../Components/Menu";
import RecomendedList from "../Components/RecomendedList";
import VideoContainer from "../Components/VideoContainer";
import { TimelineLite, gsap } from "gsap";
import Data from "../Components/Data";
import Category from "../Components/CollectionData";
const Home: NextPage = () => {
  gsap.registerPlugin();
  const [isvideo, setvideo] = useState({
    name: Data[0].videoName,
    videoSrc: Data[0].videoSrc,
  });
  const t1 = new TimelineLite({ delay: 0.3 });
  useEffect(() => {
    const scrollContainer = document.querySelector("#scrollContainer");

    scrollContainer.addEventListener("wheel", (evt) => {
      evt.preventDefault();
      scrollContainer.scrollLeft += evt.deltaY;
    });
    // prettier-ignore
    t1
   
   
  }, []);

  return (
    <div className="flex flex-col bg-mainBg w-screen h-screen overflow-hidden">
      <Head>
        <title>Streame - Video Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="flex w-full h-full">
        {/* Left Menu */}
        <div
          id="leftMenu"
          className="sm:w-[6%] md:w-[10%] min-w-[60px] h-full flex flex-col items-center justify-evenly"
        >
          <Menu icon={<Dashboard />} name={"Dashboard"} />
          <Menu icon={<VideogameAsset />} name={"Games"} />
          <Menu icon={<LocalMovies />} name={"Movies"} />
          <Menu icon={<Stream />} name={"Streamer"} />
          <Menu icon={<TrendingUp />} name={"Statistics"} />
          <Menu icon={<Chat />} name={"Messages"} />
          <Menu icon={<Favorite />} name={"Favourite"} />
          <Menu icon={<Logout />} name={"Logout"} last={true} />
        </div>

        {/* Main Container */}
        <div className="sm:w-[94%] md:w-[90%] h-full  flex flex-col">
          {/* top  list */}
          <div className="w-full h-[70%] max-h-[480px]  grid grid-cols-3 gap-2 p-2">
            <div
              className="md:col-span-2 sm:col-span-6  rounded-lg overflow-hidden
              flex items-center justify-center
            "
            >
              <VideoContainer data={isvideo} />
            </div>
            <div
              className="md:col-span-1 bg-primary sm:col-span-6  overflow-y-auto
              scrollbar scrollbar-thin scrollbar-thumb-gray-800
            "
              id="recomendedList"
            >
              <p className="text-textColor text-[18px] font-bold my-2 px-2">
                Recommended
              </p>

              {/* List item */}

              {Data &&
                Data.map((data) => (
                  <div
                    key={data.id}
                    onClick={() =>
                      setvideo({
                        name: data.videoName,
                        videoSrc: data.videoSrc,
                      })
                    }
                  >
                    <RecomendedList
                      imgSrc={data.imgSrc}
                      videoName={data.videoName}
                      artistName={"Susan Stewart"}
                    />
                  </div>
                ))}
            </div>
          </div>
          {/* bottom List */}
          <div className="w-full h-[30%] ">
            <div
              className="flex overflow-x-scroll items-center scrollbar-none py-2"
              id="scrollContainer"
            >
              {Category &&
                Category.map((Category) => (
                  <Collection key={Category.id} imgSrc={Category.imgSrc} category={Category.category} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
  
export default Home
