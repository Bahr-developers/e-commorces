import { Link, useNavigate } from "react-router-dom";
import Logo from '../../assets/images/Shopify.jpg'
import { IoIosSearch } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { IoIosMenu } from "react-icons/io";
import'../../components/style.css'
import HeaderMenu from "./HeaderMenu";
import { useRef, useState } from "react";
import HeaderSearchModal from "./HeaderSearchModal";
import { RxLightningBolt } from "react-icons/rx";
import { FiPhoneCall } from "react-icons/fi";
import { LuUser } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import Category from "../../components/Category";

const Header = () => {  
    const [openMenu, setOpenMenu] = useState<boolean>(false)
    const [openSearch, setOpenSearch] = useState<boolean>(false)
    const navigate = useNavigate();
    const category = useRef<HTMLDivElement>(null)
    const overlay = useRef<HTMLSpanElement>(null)

    const handleSHowCategores = () => {
        // category.current?.classList.toggle('h-auto')
        category.current?.classList.toggle('opacity-0')   
        overlay.current?.classList.toggle('bg-[#c0c0c062]')
        overlay.current?.classList.toggle('z-[-10]')     
    }

    const handleCloseCategory = () => {
        console.log(overlay.current?.classList[0]);
        
        if(overlay.current?.classList[0]==="overlay"){
            handleSHowCategores()
        }
    }

    const openMenuModal = () => {
        setOpenMenu(true)
        navigate('/menu')
    }

    return (
        <header>
            <div className="header hidden md:block md:container mx-auto ">
                <div className="header-top p-2 bg-black px-12 flex justify-between items-center">
                    <div className="header-top-left flex gap-x-10">
                        <select name="" className="bg-inherit text-white border-0">
                            <option className="text-black" value="uz">O'zbek</option>
                            <option className="text-black" value="ru">Russion</option>
                            <option className="text-black" value="en">English</option>
                        </select>
                        <p className="text-white font-medium">Free Shipping On All Orders Over $100</p>
                    </div>
                    <nav className="heder-top-rigth flex justify-between items-center w-[30%]">
                        <Link className="text-yellow-400 flex items-center gap-x-2" to='/'><RxLightningBolt/> Flash Sale</Link>
                        <Link className="text-white flex items-center gap-x-2" to='/'>Track Order</Link>
                        <Link className="text-white flex items-center gap-x-2" to='/'>About</Link>
                        <Link className="text-white flex items-center gap-x-2" to='/'>Contact</Link>
                        <Link className="text-white flex items-center gap-x-2" to='/'>Blog</Link>
                    </nav>
                </div>
                <div className="header-meddle pt-3 px-12 flex justify-between gap-5 items-center">
                    <img className="w-[20%]" src={Logo} alt="" />
                    <form className="border w-[45%] flex rounded-md border-[#378CE7] justify-between">
                        <div className="p-1 flex">
                            <select name="category" className="p-2 px-8 font-medium outline-none rounded-s-md border-e">
                                <option value="">All category</option>
                            </select>
                            <input className="p-2 w-[100%] border-0 outline-none " placeholder="Search for praducts" type="text" name="search"/>
                        </div>
                        <button className="p-3 px-8 rounded-e-md font-bold text-white bg-[#378CE7]">Search</button>
                    </form>
                    <div className="header-middle w-[30%] flex justify-between items-center">
                        <Link to='call: +998971082004' className="flex items-center gap-x-3">
                            <FiPhoneCall size={27}/>
                            <div className="info text-start">
                                <p className="text-[12px] text-slate-500 font-medium">Need Help?</p>
                                <p className="text-[14px] text-[#378CE7] font-bold">+998971082004</p>
                            </div>
                        </Link>
                        <Link to='/sign-in' className="flex items-center gap-x-3">
                            <LuUser size={27}/>
                            <div className="info text-start">
                                <p className="text-[12px] text-slate-500 font-medium">My Accaunt</p>
                                <p className="text-[16px] font-bold">Login</p>
                            </div>
                        </Link>
                        <Link to='/sign-in' className="flex items-center gap-x-3">
                                <div className="relative cursor-pointer"><HiOutlineShoppingCart size={28}/>
                                        <span className="absolute top-[-5px] block text-[12px] right-[-7px] bg-[#378CE7] text-white px-[6px] rounded-full">0</span>
                                </div>
                            <div className="info text-start">
                                <p className="text-[12px] text-slate-500 font-medium">My Cart</p>
                                <p className="text-[16px] font-bold">$ 0.00</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <hr />
                <div className="header-buttom px-12 p-2">
                    <span onClick={handleCloseCategory} ref={overlay} className="overlay z-[-10] fixed w-full h-full top-0 left-0" ></span>
                    <div onClick={handleSHowCategores} className="categores w-[23%] flex items-center p-2 gap-4 cursor-pointer">
                        <RxHamburgerMenu size={20}/>
                        <p className="text-[19px] font-bold">Shop Categories</p>
                        <IoIosArrowDown/>
                    </div>
                </div>
                <Category category={category}/>
            </div>
            <div className="header-mini md:hidden">
                <div className="container:sm block px-3 md:px-5">
                    <div className="header-mini-inner h-[70px] flex justify-between items-center mt-3">
                        <Link className="w-[35%] block" to="/"><img className="" src={Logo} alt="logo" /></Link>
                        <div className="menu-wrap w-[40%] flex justify-between items-center">
                            <span className="cursor-pointer" onClick={()=>setOpenSearch(true)}><IoIosSearch size={28}/></span>
                            <Link to="/user"><FiUser size={25}/></Link>
                            <div className="relative cursor-pointer"><HiOutlineShoppingCart size={28}/>
                                <span className="absolute top-[-5px] block text-[12px] right-[-7px] bg-[#378CE7] text-white px-[6px] rounded-full">0</span>
                            </div>
                            <span className="cursor-pointer" onClick={openMenuModal}><IoIosMenu size={28}/></span>
                        </div>
                    </div>
                </div>
                <HeaderSearchModal openSearch={openSearch} showSearchModal={setOpenSearch}/>
                <HeaderMenu openMenu={openMenu} showMenu={setOpenMenu}/>
            </div>
        </header>
    );
};

export default Header;