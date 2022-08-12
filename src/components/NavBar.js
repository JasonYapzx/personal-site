import { useState, useEffect } from "react";
import { useScrollDirection } from "react-use-scroll-direction";

export default function NavBar() {
    const [navbar, setNavbar] = useState(false);
    const [isOpen, setIsOpen] = useState(true);
    const { scrollDirection } = useScrollDirection();

    useEffect(() => {
        if (scrollDirection === "UP") {
            setIsOpen(true);
        } else if (scrollDirection === "DOWN") {
            setIsOpen(false);
        }
    }, [scrollDirection]);
    return (
        <nav className={`fixed top-30 z-30 w-full bg-transparent bg-opacity-10 px-8 backdrop-blur transition-all duration-500 ${
            navbar || isOpen ? "translate-y-0 delay-20" : "-translate-y-40 delay-20"}`}>
            <div className="justify-start px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-4">
                <div>
                    <div className="flex items-center justify-between py-5 md:py-5 md:block">
                        <div className="md:hidden">
                            <button
                                className="text-gray-700 rounded-md outline-none justify-center"
                                onClick={() => setNavbar(!navbar)}
                            >
                                <div className="relative w-2 h-1 transform">
                                    <span
                                        className={`absolute h-0.5 w-5 bg-black transform transition duration-300 ease-in-out ${
                                        navbar ? "rotate-45 delay-200" : "-translate-y-1.5"
                                        }`}
                                    ></span>
                                    <span
                                        className={`absolute h-0.5 bg-black transform transition-all duration-200 ease-in-out ${
                                        navbar ? "w-0 opacity-50" : "w-5 delay-200 opacity-100"
                                        }`}
                                    ></span>
                                    <span
                                        className={`absolute h-0.5 w-5 bg-black transform transition duration-300 ease-in-out ${
                                        navbar ? "-rotate-45 delay-200" : "translate-y-1.5"
                                        }`}
                                    ></span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center py-5 mt-8 md:block md:pb-0 md:mt-0 bg-inherit transition-all duration-500 ${
                            navbar ? "block" : "hidden delay-200"
                        }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-gray-600" class="link link-underline link-underline-black text-black">
                                <a href="/">me</a>
                            </li>
                            <li className="text-gray-600" class="link link-underline link-underline-black text-black">
                                <a href="/">experience</a>
                            </li>
                            <li className="text-gray-600" class="link link-underline link-underline-black text-black">
                                <a href="/">projects</a>
                            </li>
                            <li className="text-gray-600" class="link link-underline link-underline-black text-black">
                                <a href="/">contacts</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}