import React from "react";
import "./home.css";
import { SongCard } from "../index";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div className="flex gap-4 p-4 flex-wrap h-fit">
        <SongCard
          frontname="Saikat Das"
          des="Such a nice person he is and how passionate."
          url="https://www.riskcontrolstrategies.com/wp-content/uploads/2016/07/600x600.png"
        />
        <SongCard
          frontname="Sumon Mitra"
          des="lorem ipsum dolor. ersa yutr"
          url={"https://www.riskcontrolstrategies.com/wp-content/uploads/2016/07/600x600.png"}
        />
        <SongCard
          frontname="Sumon Mitra"
          des="lorem ipsum dolor. ersa yutr"
          url={"https://www.riskcontrolstrategies.com/wp-content/uploads/2016/07/600x600.png"}
        />
        <SongCard
          frontname="Sumon Mitra"
          des="lorem ipsum dolor. ersa yutr"
          url={"https://www.riskcontrolstrategies.com/wp-content/uploads/2016/07/600x600.png"}
        />
        <SongCard
          frontname="Sumon Mitra"
          des="lorem ipsum dolor. ersa yutr"
          url={"https://www.riskcontrolstrategies.com/wp-content/uploads/2016/07/600x600.png"}
        />
        <SongCard
          frontname="Sumon Mitra"
          des="lorem ipsum dolor. ersa yutr"
          url={"https://www.riskcontrolstrategies.com/wp-content/uploads/2016/07/600x600.png"}
        />
      </div>
    </>
  );
}

export default Home;
