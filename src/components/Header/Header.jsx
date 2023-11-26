import {React, useState, useContext} from "react";
import { useDispatch, useSelector } from "react-redux";
import {barClicked} from '../../features/sidebar/sidebarSlice'
import { Button, Logoimage, Logoname } from "../index";
import { Link, NavLink } from "react-router-dom";

function Header() {

  const dispatch = useDispatch();
  const selector = useSelector(state => state.sidebar.open);
  const barClick = () => {
    dispatch(barClicked(!selector));
  }
  return (
    <>
      <div className="navbar bg-black flex items-center justify-between pr-4 py-4 col-start-1 col-end-4">
        <div className="leftPart flex items-center gap-4">
          <div className="bar p-3 hover:bg-zinc-800 rounded-full hover:cursor-pointer" onClick={barClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
            >
              <path
                d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z"
                fill="white"
              ></path>
            </svg>
          </div>
          <div className="flex items-center gap-2 justify-center text-white">
            <Logoimage imagePath="/playbeatz.png" width="40" />
            <Logoname />
          </div>
        </div>
        <div className="rightPart">
          <Button name="Sign up" />
        </div>
      </div>
    </>
  );
}

export default Header;
