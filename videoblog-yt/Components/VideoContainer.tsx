function VideoContainer() {
    return (
        <div className="relative w-full h-full"> 
            <video 
            src="https://firebasestorage.googleapis.com/v0/b/videoblog-9a094.appspot.com/o/videos%2FOverwatch%202%20Launch%20Trailer.mp4?alt=media&token=87aefea5-1cf2-40ba-917e-fb131752505c"
              controls
              className="min-w-full min-h-full w-auto h-auto bg-cover"
              ></video>

            <div className="absolute top-0 left-0 z-10 w-full h-[40px] px-3 py-4 bg-gradient-to-b from-black to-transparent">
                <h2 className="text-textColor">This is the first Video</h2>
                </div>
            </div>
    )
    
    }
    
    export default VideoContainer