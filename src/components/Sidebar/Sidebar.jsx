import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { useDispatch, useSelector } from "react-redux";
import {
  LibraryAddOutlined,
  QueueMusicRounded,
  SearchOutlined,
  ThumbUpOutlined,
} from "@mui/icons-material";

function Sidebar() {
  
  const sidebarClass = useSelector(state => state.sidebar.open)? "w-max":"w-0 -z-10 px-0 py-0";

  return (
    <>
      <div className={`side bg-black px-5 py-4 text-white flex flex-col justify-between row-start-2 row-end-3 ${sidebarClass}`}>
        <div className="upper-nav-part flex flex-col gap-10">
          <ul className="flex gap-3 flex-col">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive ? "text-orange-500 bg-zinc-800 rounded-lg" : ""}`
              }
            >
              <li className="flex hover:bg-zinc-800 py-2 px-3 rounded-lg">
                <HomeOutlinedIcon />
                Home
              </li>
            </NavLink>

            <NavLink
              to="/search"
              className={({ isActive }) =>
                `${isActive ? "text-orange-500 bg-zinc-800 rounded-lg" : ""}`
              }
            >
              <li className="flex hover:bg-zinc-800 py-2 px-3 rounded-lg">
                <SearchOutlined />
                Search
              </li>
            </NavLink>
            <NavLink
              to="/library"
              className={({ isActive }) =>
                `${isActive ? "text-orange-500 bg-zinc-800 rounded-lg" : ""}`
              }
            >
              <li className="flex hover:bg-zinc-800 py-2 px-3 rounded-lg">
                <LibraryAddOutlined />
                Your Library
              </li>
            </NavLink>
          </ul>
          <ul className="flex gap-3 flex-col text">
            <NavLink
              to="/play-list"
              className={({ isActive }) =>
                `${isActive ? "text-orange-500 bg-zinc-800 rounded-lg" : ""}`
              }
            >
              <li className="flex hover:bg-zinc-800 py-2 px-3 rounded-lg">
                <QueueMusicRounded />
                Create Playlist
              </li>
            </NavLink>
            <NavLink
              to="/liked-songs"
              className={({ isActive }) =>
                `${isActive ? "text-orange-500 bg-zinc-800 rounded-lg" : ""}`
              }
            >
              <li className="flex hover:bg-zinc-800 py-2 px-3 rounded-lg">
                <ThumbUpOutlined />
                Liked Songs
              </li>
            </NavLink>
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
