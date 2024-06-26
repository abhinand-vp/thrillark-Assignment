'use client'
import { useEffect, useState } from "react"
import { SearchBar } from "./search";
import { RiHomeLine } from "react-icons/ri";
import { TbCategory } from "react-icons/tb";
import { PiCity } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { LuUser2 } from "react-icons/lu";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";

export default function Navbar() {
    const language = ["arabic", "English", "Deutsch", "Francais", "Italiano", "Espanol", "Turkish", "Chinese"]
    const currency = ["U S Dollar (US $)", "Turkey Lira(TL)"]
    const [inrModal, setInrModal] = useState(false);
    const [screenSize, setScreenSize] = useState(1500);

    useEffect(() => {
        const checkScreenSize = () => {
            setTimeout(() => {
                if (screenSize !== window.innerWidth) {
                    setScreenSize(window.innerWidth);
                }
                checkScreenSize();
            }, 100);
        };
        checkScreenSize();
        return () => clearTimeout(checkScreenSize);
    }, [screenSize]);

    return (
        <>{screenSize < 500 ?
            <div className="relative">
                <div className="fixed bottom-0 w-full h-15 bg-white border-t-2 flex justify-between items-center px-5 py-2 z-10">
                    <div className="text-[#87CEEB]">
                        <RiHomeLine fontSize={32} />
                        <p>Home</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <TbCategory fontSize={32} color="#454545" />
                        <p>Categories</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <PiCity fontSize={32} color="#454545" />
                        <p>Citys</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <CiSearch fontSize={32} color="#454545" />
                        <p>Search</p>
                    </div>
                    <div className="flex flex-col items-center">

                        <LuUser2 fontSize={32} color="#454545" />
                        <p>Account</p>
                    </div>
                </div>
            </div>
            :
            <>
            </>
        }

            <div className="h-[7vh] px-[6vw] bg-white flex justify-between items-center md:w-full lg:h-[9vh] md:px-[5vw]">
                <img className="w-24 md:w-40 md:h-12" src="/images/logo.png" />
                <div className="hidden md:block">
                <SearchBar serachModalWidth={"30vw"} classname={"block w-[95vw] md:w-[30vw] px-4 py-3 ps-14 text-sm text-gray-900 border tracking-wide border-gray-300 rounded-md bg-white focus:ring-blue-500"} placeHolder={"Search Activities and destinations"} />                </div>

                <div className="hidden md:flex justify-between gap-3 xl:gap-5 md:text-base md:text-[#333] cursor-pointer" onMouseOut={() => setInrModal(false)}>
                    <p onMouseOver={() => setInrModal(true)}
                        onClick={() => setInrModal(!inrModal)}
                    >INR र</p>
                    <p>Help & Support</p>
                    <p>Sign</p>
                </div>
                <div className="flex justify-start gap-3 mt-1 md:hidden">
                    <p className="text-base text-[#454545]">AED</p>
                    <HiOutlineQuestionMarkCircle fontSize={20} color="#454545" />
                </div>
            </div>
            {inrModal &&
                <div onMouseOver={() => setInrModal(true)}
                    className="w-auto px-5 z-10 h-auto py-5 bg-white-500 absolute bg-white md:right-[7vw] md:top-[6vh] lg:right-[7vw] lg:top-[6vh] xl:right-[7vw] xl:top-[6vh] rounded-md flex justify-start gap-16">
                    <div>
                        <p className="text-[#47c4c6] font-bold text-base py-3">Language</p>
                        {language.map((item, idx) => (
                            <p key={idx} className="text-md font-normal text-[#454545] cursor-pointer hover:text-[#47c4c6] py-[1px]">{item}</p>
                        ))}
                    </div>
                    <div>
                        <p className="text-[#47c4c6] font-bold text-base py-3">Currency</p>
                        {currency.map((item, idx) => (
                            <p key={idx} className="text-md font-normal text-[#454545] cursor-pointer hover:text-[#47c4c6] py-[1px]">{item}</p>

                        ))}
                    </div>
                </div>
            }
        </>
    )
}