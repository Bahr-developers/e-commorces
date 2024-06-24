import React, { useState } from "react";
import Header from "../sections/header/Header";
import Star from "../components/Star";


const data = [
    {
      img: "https://picsum.photos/id/28/450/550",
      id: 1,
    },
    {
      img: "https://picsum.photos/id/15/450/550",
      id: 2,
    },
    {
      img: "https://picsum.photos/id/5/450/550",
      id: 3,
    },
    {
      img: "https://picsum.photos/id/215/450/550",
      id: 4,
    },
  ];


const View: React.FC = () => {
    const [activeImage, setActiveImage] = useState<string>(data[0].img);
    return (
        <>
            <Header/>
            <div className="container px-3 md:px-10">
                <div className="info-wrap ">
                    <div className="card-image-view border w-full p-3 rounded-md md:w-[47%]">
                        <img className="p-2" src={activeImage} alt="mainimage"/>
                        <div className="flex justify-evenly items-center">
                            {data.length && data.map(el => {
                                return <img 
                                className={el.img===activeImage ? "w-[70px] cursor-pointer border-black border-[2px] p-[2px]":"w-[70px] border cursor-pointer p-[2px]"}
                                key={el.id}
                                src={el.img}
                                onClick={()=>setActiveImage(el.img)}
                                alt="img" />
                            })}
                        </div>
                    </div>
                    <div className="card-image-info">
                        <p>iPhone</p>
                        <h2>Unlocked Apple iPhone11 Pro, 64GB/256GB, 12MP Camera</h2>
                        <div className="flex items-center gap-2">
                        <Star/> (4.5)
                        </div>
                        <div className="view-page-price flex items-center gap-4">
                            <h2 className="text-red-500 text-[18px]">$480.99</h2>
                            <h2 className="text-slate-300 line-through text-[18px]">$599.23</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default View;