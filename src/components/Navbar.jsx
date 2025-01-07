import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);  // Toggle the menu open/close state
    };

    return (
        <nav className="bg-white shadow-lg fixed top-0 w-full z-10 font-inter">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                <div className="flex items-center">
                    <Link to="/"><img src="/img/logo1.png" alt="Logo" className="h-[50px] max-sm:h-[35px] w-auto" /></Link>
                </div>

                <button
                    id="menu-toggle"
                    className="block lg:hidden text-black focus:outline-none"
                    onClick={handleMenuToggle}  // Toggle the menu when clicked
                >
                    <i className="fas fa-bars text-2xl"></i>
                </button>

                <ul id="menu" className="hidden lg:flex lg:space-x-14 text-black font-extrabold">
                    <li><Link to="/" className="hover:text-gray-600">Home</Link></li>
                    <li><Link to="/product" className="hover:text-gray-600">Product</Link></li>
                    <li><Link to="/profile" className="hover:text-gray-600">Profile</Link></li>
                    <li><Link to="/contact-us" className="hover:text-gray-600">Contact Us</Link></li>
                    <li><Link to="/about-us" className="hover:text-gray-600">About Us</Link></li>
                </ul>

                <div className="hidden lg:flex space-x-4 text-black">
                    <a href="https://www.instagram.com/samsungindonesia/" className="text-black hover:text-blue-500"><i className="fab fa-instagram text-2xl"></i></a>
                    <a href="https://x.com/samsungID?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor&mx=2" className="text-black hover:text-blue-500"><i className="fa-brands fa-x-twitter text-2xl"></i></a>
                    <a href="https://support.spotify.com/id-id/article/samsung-login-help/" className="text-black hover:text-blue-500"><i className="fab fa-spotify text-2xl"></i></a>
                    <a href="https://www.youtube.com/user/samsungindonesia" className="text-black hover:text-blue-500"><i className="fab fa-youtube text-2xl"></i></a>
                </div>
            </div>

            {/* Toggle visibility of the dropdown menu */}
            <div
                id="dropdown-menu"
                className={`lg:hidden bg-white shadow-lg ${isMenuOpen ? 'block' : 'hidden'}`}  // Conditionally display menu
            >
                <ul className="flex flex-col space-y-4 py-4 px-6 text-black font-bold">
                    <li><Link to="/" className="hover:text-gray-600">Home</Link></li>
                    <li><Link to="/product" className="hover:text-gray-600">Product</Link></li>
                    <li><Link to="/profile" className="hover:text-gray-600">Profile</Link></li>
                    <li><Link to="/contact-us" className="hover:text-gray-600">Contact Us</Link></li>
                    <li><Link to="/about-us" className="hover:text-gray-600">About Us</Link></li>
                    <div className="flex space-x-4 text-black mt-4">
                        <a href="https://www.instagram.com/samsungindonesia/" className="text-black hover:text-blue-500"><i className="fab fa-instagram text-2xl"></i></a>
                        <a href="https://x.com/samsungID?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor&mx=2" className="text-black hover:text-blue-500"><i className="fa-brands fa-x-twitter text-2xl"></i></a>
                        <a href="https://support.spotify.com/id-id/article/samsung-login-help/" className="text-black hover:text-blue-500"><i className="fab fa-spotify text-2xl"></i></a>
                        <a href="https://www.youtube.com/user/samsungindonesia" className="text-black hover:text-blue-500"><i className="fab fa-youtube text-2xl"></i></a>
                    </div>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
