import {
  FiberSmartRecord,
  Notifications,
  Search,
  Settings,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";

function Header() {
  return (
    <div className="py-4 md:px-8 flex items-center w-full h-[80px] sm:px-4">
      
      <img
        src="https://media.istockphoto.com/id/1249218035/vi/vec-to/angry-panda-mascot-logo-gamin-vector-minh-h%E1%BB%8Da.jpg?s=612x612&w=0&k=20&c=hmP42LHNv3ieDDLyrSqY2a4dznkzB28Ogsmb2fa4Yr8="
        alt=""
        className="w-[60px] h-[60px] sm:w-[130px] sm:h-[90px] mt-2 ml-0 lg:ml-[-1px] rounded-full"
        id="logo"
      />

      {/* search Box */}
      <div
        className="bg-searchBar h-[40px] flex items-center overflow-hidden px-2 ml-20 
      sm:hidden md:flex"
        id="searchBox"
      >
        <Search className="text-gray-400" />
        <input
          type="text"
          className="w-full h-full bg-transparent rounded-lg text-textColor outline-none border-none placeholder-gray-400 px-2"
          placeholder="Search"
        />
      </div>

      <div
        className="ml-auto flex items-center justify-evenly h-[40px] 
        sm:w-[75%] md:w-[50%] lg:w-[25%] "
        id="profileContainer"
      >
        <IconButton className="lg:mx-4">
          <Settings className="text-gray-400 hover:text-textColor" />
        </IconButton>
        <IconButton className="lg:mx-4">
          <Notifications className="text-gray-400 hover:text-textColor" />
        </IconButton>
        <div className="flex items-center">
        <img 
src="https://firebasestorage.googleapis.com/v0/b/videoblog-9a094.appspot.com/o/Images%2Ficon-256x256.png?alt=media&token=9c5d387b-2745-4186-b33f-ac1cd721330b"        alt=""
            className="rounded-full w-[40px] h-[40px] object-cover"
          />
          <p className="text-textColor text-[16px] font-bold ml-2">
            Abdalrhman Dabor{" "}
            <span className="block text-[12px] text-gray-500">
              Pro Player 👑
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
