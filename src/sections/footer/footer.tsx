import { CiTwitter, CiFacebook, CiInstagram } from "react-icons/ci";
import { AiOutlinePinterest } from "react-icons/ai";
// import  from "react-icons/ci";
import logo from "../../assets/images/Shopify.jpg";
const Footer = () => {
    return (
        <div className=" footer mt-44">
            <div className="container mx-auto">
                <div className="footer_inner px-3 flex flex-col items-start w-full">
                    <h1 className="font-bold text-3xl mt-4 mb-6 ">Footer</h1>
                    <div className="">
                        <ul className="footer_list md:w-full flex flex-col md:flex-row gap-4 md:gap-14 lg:gap-64 ">
                            <li className="footer_list-item w-full grid grid-cols-2 md:flex md:flex-col gap-2">
                                <img width={220} src={logo} alt="site logo png" className="col-span-2" />
                                <p>Lorem ipsum dolor.</p>
                                <p>Lorem, ipsum dolor.</p>
                                <p>Lorem ipsum dolor sit.</p>
                                <p> +998881234567</p>
                                <div className="flex gap-4">
                                    <span><CiFacebook /></span>
                                    <span><CiTwitter /></span>
                                    <span><CiInstagram /></span>
                                    <span><AiOutlinePinterest /></span>
                                </div>
                            </li>
                            <li className="footer_list-item mt-5 w-full grid grid-cols-2 md:flex md:flex-col gap-2">
                                <h5 className="font-bold text-xl col-span-2">About us</h5>
                                <p>About us</p>
                                <p>News & Blog</p>
                                <p>Brands</p>
                                <p>Press Center</p>
                                <p>Advertising</p>
                                <p> Investors</p>
                            </li>
                            <li className="footer_list-item mt-5 md:mt-4 w-full grid grid-cols-2 md:flex md:flex-col gap-0 md:gap-2">
                                <h5 className="font-bold text-xl col-span-2">Support</h5>
                                <p>Support Center</p>
                                <p>News & Blog</p>
                                <p>Brands</p>
                                <p>Press Center</p>
                                <p>Advertising</p>
                                <p> Investors</p>
                            </li>
                            <li className="footer_list-item mt-5 w-full grid grid-cols-2 md:flex md:flex-col gap-2">
                                <h5 className="font-bold text-xl">Order</h5>
                                <p>Check Order</p>
                                <p>Order</p>
                                <p>Brands</p>
                                <p>Press Center</p>
                                <p>Advertising</p>
                                <p> Investors</p>
                            </li>
                        </ul>
                    </div>
                    <div className=" flex flex-col items-start gap-3">
                        <h2 className="font-bold text-2xl mt-10 ">Trending Tags:</h2>
                        <ul className="flex flex-wrap gap-3 ">
                            <li>
                                <button className="px-4 py-1 border border-black border-opacity-45 rounded-md">Accessories</button>
                            </li>
                            <li>
                                <button className="px-4 py-1 border border-black border-opacity-45 rounded-md">Accessor</button>
                            </li>
                            <li>
                                <button className="px-4 py-1 border border-black border-opacity-45 rounded-md">Acces</button>
                            </li>
                            <li>
                                <button className="px-4 py-1 border border-black border-opacity-45 rounded-md">AccessAcces</button>
                            </li>
                            <li>
                                <button className="px-4 py-1 border border-black border-opacity-45 rounded-md">Aories</button>
                            </li>
                            <li>
                                <button className="px-4 py-1 border border-black border-opacity-45 rounded-md">Accessori</button>
                            </li>
                            <li>
                                <button className="px-4 py-1 border border-black border-opacity-45 rounded-md">Acies</button>
                            </li>
                            <li>
                                <button className="px-4 py-1 border border-black border-opacity-45 rounded-md">Accessories</button>
                            </li>
                            <li>
                                <button className="px-4 py-1 border border-black border-opacity-45 rounded-md">Accessories</button>
                            </li>
                            <li>
                                <button className="px-4 py-1 border border-black border-opacity-45 rounded-md">Acceies</button>
                            </li>
                            <li>
                                <button className="px-4 py-1 border border-black border-opacity-45 rounded-md">Accessories</button>
                            </li>
                            <li>
                                <button className="px-4 py-1 border border-black border-opacity-45 rounded-md">Acories</button>
                            </li>
                            <li>
                                <button className="px-4 py-1 border border-black border-opacity-45 rounded-md">Accessories</button>
                            </li>
                            <li>
                                <button className="px-4 py-1 border border-black border-opacity-45 rounded-md">Assories</button>
                            </li>
                            <li>
                                <button className="px-4 py-1 border border-black border-opacity-45 rounded-md">Accessories</button>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-14 mx-auto">
                        <p>© TecnoMall. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;