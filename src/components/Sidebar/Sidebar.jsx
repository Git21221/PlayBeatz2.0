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

const menuItems = [
  {
    id: 1,
    name: "Home",
    icon: <HomeOutlinedIcon />,
    path: "/",
  },
  {
    id: 2,
    name: "Search",
    icon: <SearchOutlined />,
    path: "/search",
  },
  {
    id: 3,
    name: "Your Library",
    icon: <LibraryAddOutlined />,
    path: "/library",
  },
  {
    id: 4,
    name: "Create Playlist",
    icon: <QueueMusicRounded />,
    path: "/play-list",
  },
  {
    id: 5,
    name: "Liked Songs",
    icon: <ThumbUpOutlined />,
    path: "/liked-songs",
  },
];

function SidebarItems({ item: { name, icon, path } }) {
  return (
    <ul className="flex gap-3 flex-col">
      <NavLink
        to={path}
        className={({ isActive }) =>
          `${isActive ? "text-orange-500 bg-zinc-800 rounded-lg" : ""}`
        }
      >
        <li className="flex hover:bg-zinc-800 py-2 px-3 rounded-lg">
          {icon}
          {name}
        </li>
      </NavLink>
    </ul>
  );
}

function PoliciesItems() {
  return (
    <div className="lower-nav-part">
      <ul className="flex flex-col gap-2">
        <li>Privacy</li>
        <li>Cookies</li>
      </ul>
    </div>
  );
}

function Sidebar() {
  const sidebarClass = useSelector((state) => state.sidebar.open)
    ? "w-max"
    : "w-0 -z-10 px-0 py-0";

  return (
    <>
      <div
        className={`side bg-black px-5 py-4 text-white flex flex-col justify-between row-start-2 row-end-3 ${sidebarClass}`}
      >
        <div className="upper-nav-part flex flex-col gap-5">
          {menuItems.map((item) => (
            <SidebarItems key={item.id} item={item} />
          ))}
        </div>
        <PoliciesItems />
      </div>
    </>
  );
}

export default Sidebar;
