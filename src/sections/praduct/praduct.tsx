import { Link } from "react-router-dom";
import PraducrCard from "../../components/praducrCard";

const Praduct = () => {
    return (
        <div className="container mx-auto p-3 md:px-10">
            <div className="praduct-card-head my-3 flex justify-center md:justify-between items-center flex-col md:flex-row">
                <h1 className="font-bold text-[25px] md:text-[35px]">Best Sellers</h1>
                <div className="praduct-catg flex justify-between gap-5 flex-wrap">
                    <Link className="hover:text-[#003285] text-[14px] md:text-[18px] font-medium" to='home/smartphone'>Smartphone</Link>
                    <Link className="hover:text-[#003285] text-[14px] md:text-[18px] font-medium" to='home/laptops'>Laptops</Link>
                    <Link className="hover:text-[#003285] text-[14px] md:text-[18px] font-medium" to='home/iwash'>Iwash</Link>
                    <Link className="hover:text-[#003285] text-[14px] md:text-[18px] font-medium" to='home/accessories'>Accessories</Link>
                </div>
            </div>
            <hr />
            <div className="praduct-body mt-5 grid grid-cols-2 gap-3">
                <PraducrCard/>
                <PraducrCard/>
                <PraducrCard/>
            </div>
        </div>
    );
};

export default Praduct;