import { IoIosSearch } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const HeaderSearchModal = ({setOpenSearch, showSearchModal}) => { 
    return (
        <div className={setOpenSearch?"search-mini fixed transition-all z-10 duration-500 w-full h-full top-0 right-0 bg-slate-50":"transition-all w-0 h-full"}>
                    <div className={setOpenSearch?"search-wrap-mini":"hidden"}>
                        <div className="category-header flex items-center gap-[2px]">
                            <select className="w-[90%] block font-bold p-4 fw-bold border-0 outline-none bg-[#EEEEEE]" name="category">
                                <option value="v">Gaming</option>
                            </select>
                            <button className="bg-[#EEEEEE] p-[15px]" onClick={()=>showSearchModal(false)}><IoClose size={25}/></button>
                        </div>
                        <div className="serach-header sm:containe px-3 mt-7 flex items-center">
                            <input className="border border-[#378CE7] w-[80%] p-4 rounded-s-lg" type="text" name="search"placeholder="Search for praducts"/>
                            <button className="p-4 bg-[#378CE7] rounded-e-lg text-white"><IoIosSearch size={25}/></button>
                        </div>
                    </div>
        </div>
    );
};

export default HeaderSearchModal;