import React from "react";
import './sidebar.css'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { LibraryAddOutlined, QueueMusicRounded, SearchOutlined, ThumbUpOutlined } from "@mui/icons-material";
function Sidebar() {
  return (
    <>
      <div className="side w-max bg-black px-6 py-4 text-white flex flex-col justify-between row-start-2 row-end-3">
        <div className="upper-nav-part flex flex-col gap-10">
          <ul className="flex gap-3 flex-col">
            <li className="flex"><HomeOutlinedIcon />Home</li>
            <li className="flex"><SearchOutlined/>Search</li>
            <li className="flex"><LibraryAddOutlined/>Your Library</li>
          </ul>
          <ul className="flex gap-3 flex-col text">
            <li className="flex"><QueueMusicRounded/>Create Playlist</li>
            <li className="flex"><ThumbUpOutlined/>Liked Songs</li>
          </ul>
        </div>
        <div className="lower-nav-part">
          <ul>
            <li>Privacy</li>
            <li>Cookies</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
