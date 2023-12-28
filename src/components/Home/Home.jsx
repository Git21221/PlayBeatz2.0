import React from "react";
import "./home.css";
import { SongCard } from "../index";

function Home() {

  return (
    <>
      <div className="mainbody flex gap-4 p-4 flex-wrap overflow-y-auto">
          <SongCard
            frontname="Saikat Das"
            des="Such a nice person he is."
            url="https://www.riskcontrolstrategies.com/wp-content/uploads/2016/07/600x600.png"
          />
        <SongCard
          frontname="Sumon Mitra"
          des="lorem ipsum dolor. ersa yutr"
          url={"https://www.riskcontrolstrategies.com/wp-content/uploads/2016/07/600x600.png"}
        />
        <SongCard
          frontname="Sunny Mishra"
          des="lorem ipsum dolor. ersa yutr"
          url={"https://www.riskcontrolstrategies.com/wp-content/uploads/2016/07/600x600.png"}
        />
        <SongCard
          frontname="Anirban Sarkar"
          des="lorem ipsum dolor. ersa yutr"
          url={"https://www.riskcontrolstrategies.com/wp-content/uploads/2016/07/600x600.png"}
        />
        <SongCard
          frontname="Vikash Dutta"
          des="lorem ipsum dolor. ersa yutr"
          url={"https://www.riskcontrolstrategies.com/wp-content/uploads/2016/07/600x600.png"}
        />
        <SongCard
          frontname="Subhayu kuma"
          des="lorem ipsum dolor. ersa yutr"
          url={"https://www.riskcontrolstrategies.com/wp-content/uploads/2016/07/600x600.png"}
        />
        
      </div>
    </>
  );
}

export default Home;
