import React from "react";
import {Button, Logoimage, Logoname} from '../index'
function Header() {
  return (
    <>
      <div className="navbar bg-black flex items-center justify-between px-6 py-4 col-start-1 col-end-4">
        <div className="leftPart flex items-end gap-2">
          <Logoimage 
          imagePath="src\assets\playbeatz.png"
          width="70"
          />
          <Logoname />
        </div>
        <div className="rightPart">
          <Button 
          name="Sign up"
          />
        </div>
      </div>
    </>
  );
}

export default Header;
