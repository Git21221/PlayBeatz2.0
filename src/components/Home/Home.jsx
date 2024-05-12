import React from "react";
import "./home.css";
import { SongCard } from "../index";

const Heading = ({header}) => {
  return (
    <div className="heading flex justify-between items-center px-4">
      <h1 className="text-white text-2xl font-bold">{header}</h1>
      <div className="showAll">
        <button className="text-neutral-300 font-[600] text-md">Show All</button>
      </div>
    </div>
  );
};

function Home() {
  return (
    <main className="overflow-y-auto py-4 px-2">
      <main className="flex flex-col gap-5">
        <div className="parts">
          <Heading header={"First Row"}/>
          <div className="mainbody flex gap-4 p-4 flex-wrap overflow-y-auto h-min">
            <SongCard
              frontname="Saikat Das"
              des="Such a nice person he is."
              url="https://www.riskcontrolstrategies.com/wp-content/uploads/2016/07/600x600.png"
            />
            <SongCard
              frontname="Sumon Mitra"
              des="lorem ipsum dolor. ersa yutr ertu wdas wdadawfd efsaf"
              url={
                "https://www.riskcontrolstrategies.com/wp-content/uploads/2016/07/600x600.png"
              }
            />
            <SongCard
              frontname="Sunny Mishra"
              des="lorem ipsum dolor. ersa yutr"
              url={
                "https://www.riskcontrolstrategies.com/wp-content/uploads/2016/07/600x600.png"
              }
            />
            <SongCard
              frontname="Anirban Sarkar"
              des="lorem ipsum dolor. ersa yutr"
              url={
                "https://www.riskcontrolstrategies.com/wp-content/uploads/2016/07/600x600.png"
              }
            />
            <SongCard
              frontname="Vikash Dutta"
              des="lorem ipsum dolor. ersa yutr"
              url={
                "https://www.riskcontrolstrategies.com/wp-content/uploads/2016/07/600x600.png"
              }
            />
            <SongCard
              frontname="Subhayu kumar"
              des="lorem ipsum dolor. ersa yutr"
              url={
                "https://www.riskcontrolstrategies.com/wp-content/uploads/2016/07/600x600.png"
              }
            />
          </div>
        </div>
        <div className="parts">
          <Heading header={"Second Row"}/>
          <div className="mainbody flex gap-4 p-4 flex-wrap overflow-y-auto h-min">
            <SongCard
              frontname="Saikat Das"
              des="Such a nice person he is."
              url="https://www.riskcontrolstrategies.com/wp-content/uploads/2016/07/600x600.png"
            />
            <SongCard
              frontname="Sumon Mitra"
              des="lorem ipsum dolor. ersa yutr ertu wdas wdadawfd efsaf"
              url={
                "https://www.riskcontrolstrategies.com/wp-content/uploads/2016/07/600x600.png"
              }
            />
            <SongCard
              frontname="Sunny Mishra"
              des="lorem ipsum dolor. ersa yutr"
              url={
                "https://www.riskcontrolstrategies.com/wp-content/uploads/2016/07/600x600.png"
              }
            />
            <SongCard
              frontname="Anirban Sarkar"
              des="lorem ipsum dolor. ersa yutr"
              url={
                "https://www.riskcontrolstrategies.com/wp-content/uploads/2016/07/600x600.png"
              }
            />
            <SongCard
              frontname="Vikash Dutta"
              des="lorem ipsum dolor. ersa yutr"
              url={
                "https://www.riskcontrolstrategies.com/wp-content/uploads/2016/07/600x600.png"
              }
            />
            <SongCard
              frontname="Subhayu kumar"
              des="lorem ipsum dolor. ersa yutr"
              url={
                "https://www.riskcontrolstrategies.com/wp-content/uploads/2016/07/600x600.png"
              }
            />
          </div>
        </div>
      </main>
    </main>
  );
}

export default Home;
