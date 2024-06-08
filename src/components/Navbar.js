'use client'
import { useEffect, useState } from "react"
import { SearchBar } from "./search";

export default function Navbar() {
    const [inrModal, setInrModal] = useState(false);
    const [isMObileOrNot, setIsMObileOrNot] = useState(false);

    useEffect(() => {
        if (window.innerWidth < 500) {
            setIsMObileOrNot(true)
        }
    }, []);

    return (
        <>{isMObileOrNot ?
            <>Mobile view</> :
            <>
                <div className="none md:w-full md:h-16 bg-white px-[5vw] flex justify-between">
                    <h1 className="text-4xl">Thrillark</h1>
                    <SearchBar classname={"block w-full p-4 ps-14 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500"} placeHolder={"Search Mockups, Logos..."}/>

                    <div className="flex justify-between gap-8 mt-4 text-base text-[#333]">
                        <p onMouseOver={() => setInrModal(true)}
                            onMouseOut={() => setInrModal(false)}
                        >INR</p>
                        <p>Help and Support</p>
                        <p>Sign</p>
                    </div>
                </div>
                {inrModal &&
                    <div
                        className="w-auto px-5 h-auto py-5 bg-white-500 absolute bg-white right-[7vw] top-10 rounded-md flex justify-start gap-16 px-5">
                        <div>
                            <p className="text-[#47c4c6] font-bold text-base py-3">Language</p>
                            <p className="text-base font-normal">English</p>
                            <p className="text-base font-normal">Arabic</p>
                            <p className="text-base font-normal">Dectsch</p>
                            <p className="text-base font-normal">Francais</p>
                        </div>
                        <div>
                            <p className="text-[#47c4c6] font-bold text-base py-3">Currency</p>
                            <p className="text-base font-normal">US Doller</p>
                            <p className="text-base font-normal">items</p>
                            <p className="text-base font-normal">items</p>
                            <p className="text-base font-normal">items</p>
                        </div>
                    </div>
                }
            </>
        }

        </>
    )
}