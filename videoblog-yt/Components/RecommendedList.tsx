function RecommendedList() {
    return (
        <div className="flex items-center mb-2 cursor-pointer px-3 py-2 hover:bg-gray-900 duration-200 ease-in-out">
            <img src="https://firebasestorage.googleapis.com/v0/b/videoblog-9a094.appspot.com/o/Images%2F23br-c4s1-egs-launcher-pdp-2560x1440-2560x1440-70cf344c9005.jpg?alt=media&token=15438b7b-b656-48c2-a2fe-a14fdd727bec" 
            alt=""
            className="sm:w-[60px] sm:h[60px] lg:w-[140px] lg:h[80px] rounded-lg object-cover" />
            <div className="ml-2 flex-1">
                <h3 className="text-textColor lg:text-[16px] sm:text[12px]">Fortnite Season2 
                <span className="block text-[12px] text-gray-400">Fortnite</span></h3>
                <div className="flex items-center mt-2">
                    <p className="text-[14px] font-bold text-gray-500">40.30</p>
                    <p className="text-[14px] font-bold text-gray-500 ml-6">1.2M</p>
                </div>
            </div>
        </div>
    )
    
    }
    
    export default RecommendedList