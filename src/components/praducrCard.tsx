import { TiStarFullOutline } from "react-icons/ti";
import { TiStarHalfOutline } from "react-icons/ti";
import image from '../assets/images/phone.webp'
import { VscHeart } from "react-icons/vsc";
// import { VscHeartFilled } from "react-icons/vsc";
import { FiEye } from "react-icons/fi";
import './style.css'



const PraducrCard = () => {
    return (
            <div className="min-w-[150px] praduct-card relative overflow-hidden border-0 cursor-pointer md:border md:border-white md:hover:border transition-all md:hover:border-[#10439F] md:p-3 rounded-md">
            <span className="skidka absolute top-0 left-0 md:top-5 md:left-4 bg-[#10439F] text-white text-[10px] rounded px-2 p-1">-20%</span>
            <div className="praduct-info hidden md:flex flex-col absolute top-10 gap-3 right-2">
                <button className=" border rounded-full p-1 hover:bg-slate-200"><VscHeart size={18}/></button>
                    <button className=" border rounded-full p-1 hover:bg-slate-200"><FiEye size={18}/></button>
                </div>
                <button className="hear md:hidden absolute top-0 right-0 bg-slate-200 rounded-full p-1"><VscHeart size={15} /></button>
                <img className="mx-auto w-[90%]" src={image} alt="img" />
                <div className="image-text">
                    <h2 className="text-slate-400 text-[15px] font-semibold">15 Pro Max</h2>
                    <h2 className="text-[16px] font-semibold h-[50px] overflow-hidden">Apple iPhone 15 Pro Max, 512GB, ...</h2>
                    <div className="star flex text-yellow-400">
                        <TiStarFullOutline/>
                        <TiStarFullOutline/>
                        <TiStarFullOutline/>
                        <TiStarFullOutline/>
                        <TiStarHalfOutline/>
                    </div>
                    <div className="price-praduct flex gap-x-2">
                        <p className="text-red-500 font-medium text-4">$699.99</p>
                        <p className="text-slate-400 line-through font-medium text-4">$949.99</p>
                    </div>
                </div>
                <button className="border w-full mt-3 block p-2 rounded-md uppercase font-semibold hover:bg-[#10439F] hover:text-white transition-all border-[#10439F] text-[15px] ">Add to card</button>
        </div>
    );
};

export default PraducrCard;