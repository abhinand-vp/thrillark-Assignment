import { useEffect, useState } from "react"

export default function Navbar() {
    const [inrModal, setInrModal] = useState(false);
    const [isMObileOrNot, setIsMObileOrNot] = useState(false);
    const size = window.innerWidth;
    console.log(size);

    useEffect(() => {
        if (size < 500) {
            setIsMObileOrNot(true)
        }
    }, [size]);

    return (
        <>{isMObileOrNot ?
            <>Mobile view</> :
            <>
                <div className="none md:w-full md:h-16 bg-white px-[5vw] flex justify-between">
                    <h1 className="text-4xl">Thrillark</h1>
                    <form class="hidden md:block md:max-w-md md:mx-auto md:w-[30vw]">
                        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only bg-white">Search</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="search" id="default-search" class="block w-full p-4 ps-14 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500" placeholder="Search Mockups, Logos..." required />
                        </div>
                    </form>

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