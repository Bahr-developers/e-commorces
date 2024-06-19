import { useState } from "react";
import { BiPhoneCall } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";
import { IoIosArrowUp, IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";

const HeaderMenu = ({openMenu, showMenu}) => {
    const [language, setLanguage] = useState<boolean>(false)
    const [changeLang, setChangeLang] = useState<string>('English')
    const naviagte = useNavigate()
    const handleChangeLang = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log((e.target as HTMLBRElement).classList) 
        setChangeLang((e.target as HTMLButtonElement).innerHTML)
        setLanguage(false)
    }
    const closeMenuModal = () => {
        showMenu(false)
        naviagte('/')
    }
    
    return (
        <div className={openMenu? "header-menu-minu z-10 transition-all fixed duration-500 w-full h-full top-0 right-0 bg-slate-50": "transition-all w-0 h-full"}>
        <div className={openMenu?"menu-minu":"hidden"}>
            <div className="category-header flex items-center gap-[2px]">
                    <NavLink to="menu" className="bg-[#EEEEEE] p-4 text-black"><IoIosMenu size={25}/></NavLink>
                    <NavLink to='menu-category' className="w-[80%] p-4 text-center font-bold bg-[#EEEEEE]" >Shop Categories</NavLink>
                    <button className="bg-[#EEEEEE] p-[15px]" onClick={closeMenuModal}><IoClose size={25}/></button>
            </div>
            <div className="body-minu">
                <Outlet/>
            </div>
            <div className="menu-button w-full fixed bottom-0">
                <hr />
                <div className="mini-info flex justify-between items-center p-3 px-5">
                    <Link className="block" to="/">Today's Deal <span className="bg-red-600 menu-skitka text-white ps-5 rounded-md p-1 ">HOT</span></Link>
                    <div className="fovarite relative">
                        <CiHeart size={30}/>
                        <span className="absolute block top-[-2px] right-[-5px] text-[10px] text-white rounded-full bg-[#378CE7] px-1">0</span>
                    </div>
                </div>
                <div className={language?"bg-white flex text-start flex-col absolute bottom-10 left-0 w-[120px] p-2 text-[18px] font-bold rounded-sm":"hidden"}>
                    <button onClick={handleChangeLang} className="ru">Russion</button>
                    <button onClick={handleChangeLang} className="fr">Franch</button>
                </div>
                <div className="bg-black p-3 flex justify-between">
                    <div onClick={() => setLanguage(e => !e)} className="selecr-language cursor-pointer text-white flex items-center gap-2">
                        <span  className="text-white">{changeLang}</span> <IoIosArrowUp/>
                    </div>
                    <Link to="tel:+998971082004" className="contact text-yellow-300 flex items-center gap-2">
                        <BiPhoneCall size={20}/>
                        +998971082004
                    </Link>
                </div>
            </div>
        </div>
    </div>
    );
};

export default HeaderMenu;