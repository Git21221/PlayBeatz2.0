import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import {
  LibraryAddOutlined,
  QueueMusicRounded,
  SearchOutlined,
  ThumbUpOutlined,
} from "@mui/icons-material";
function Sidebar() {
  return (
    <>
      <div className="side w-max bg-black px-6 py-4 text-white flex flex-col justify-between row-start-2 row-end-3">
        <div className="upper-nav-part flex flex-col gap-10">
          <ul className="flex gap-3 flex-col">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive ? "text-orange-400" : "text-white"}`
              }
            >
              <li className="flex">
                <HomeOutlinedIcon />
                Home
              </li>
            </NavLink>

            <NavLink
              to="/search"
              className={({ isActive }) =>
                `${isActive ? "text-orange-400" : "text-white"}`
              }
            >
              <li className="flex">
                <SearchOutlined />
                Search
              </li>
            </NavLink>
            <NavLink
              to="/library"
              className={({ isActive }) =>
                `${isActive ? "text-orange-400" : "text-white"}`
              }
            >
              <li className="flex">
                <LibraryAddOutlined />
                Your Library
              </li>
            </NavLink>
          </ul>
          <ul className="flex gap-3 flex-col text">
            <NavLink
              to="/play-list"
              className={({ isActive }) =>
                `${isActive ? "text-orange-400" : "text-white"}`
              }
            >
              <li className="flex">
                <QueueMusicRounded />
                Create Playlist
              </li>
            </NavLink>
            <NavLink
              to="/liked-songs"
              className={({ isActive }) =>
                `${isActive ? "text-orange-400" : "text-white"}`
              }
            >
              <li className="flex">
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
