import { TiStarFullOutline } from "react-icons/ti";
import { TiStarHalfOutline } from "react-icons/ti";
import image from '../assets/images/phone.webp'



const PraducrCard = () => {
    return (
        <div className="w-[170px]">
            <img className="mx-auto" src={image} alt="img" />
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