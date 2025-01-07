import React from 'react';

const Footer = () => {
    return (
<footer className="bg-white py-8 border-t border-gray-500 w-full mt-auto">
  <div className="flex flex-col md:flex-row items-start md:items-center justify-between px-6 md:px-12 lg:px-24">
    <div className="flex flex-col max-sm:mb-4">
      <div className="md:mb-4 mb-2 flex flex-col md:flex-row items-start">
        <img src="/img/logo.png" alt="Logo" className="w-[80px] h-[80px] mb-2" />
        <h3 className="text-2xl font-bold md:ms-4 md:mt-1">SAMSUNG<br /> INDONESIA</h3>
      </div>
      <div className="flex flex-col md:mt-2">
        <p className="text-sm text-gray-600">Copyright© 1995-2025 Samsung. All rights reserved.</p>
      </div>
    </div>

    <div className="mb-6 md:mb-0 flex flex-col items-start">
      <h4 className="text-lg font-bold">CONTACT</h4>
      <p className="text-sm text-black">
        <b>Email:</b> <a href="cs.care@samsung.com" className="text-blue-500 hover:underline">cs.care@samsung.com</a>
      </p>
      <hr className="mt-4 border-black border-1 w-[250px]" />
      <p className="text-sm text-black mt-2">
        Samsung Research America Headquarters. Mountain View.<br />
        665 Clyde Avenue Mountain View, CA 94043 Phone: (650) 210-1001.
      </p>
    </div>

    <div className="w-full md:w-auto flex flex-col items-start">
      <h4 className="text-lg font-bold mb-2">FOLLOW US</h4>
      <div className="flex space-x-4 justify-start">
        <a href="https://www.instagram.com/samsungindonesia/" className="text-black hover:text-blue-500"><i className="fab fa-instagram"></i></a>
        <a href="https://x.com/samsungID?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor&mx=2" className="text-black hover:text-blue-500"><i className="fa-brands fa-x-twitter"></i></a>
        <a href="https://support.spotify.com/id-id/article/samsung-login-help/" className="text-black hover:text-blue-500"><i className="fab fa-spotify"></i></a>
        <a href="https://www.youtube.com/user/samsungindonesia" className="text-black hover:text-blue-500"><i className="fab fa-youtube"></i></a>
      </div>
    </div>
  </div>
</footer>


    );
};

export default Footer;
