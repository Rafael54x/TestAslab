import React from 'react';

function AboutUs() {
  return (
    <section className="container mx-auto px-6 py-24">
      <div className="flex flex-col md:flex-row items-center justify-between p-8 rounded-lg">
        {/* Left Content (Image) */}
        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0 md:pr-12">
          <img
            src="/img/me.jpg" 
            alt="Company Image"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-extrabold mb-4 text-gray-900">Rafael Natanael</h2>
          <p className="text-black mb-6 leading-relaxed">
          Hello! My name is Rafael Natanael, and I’m 20 years old. I work as a freelancer, and my passion for IT developments around the world drives me to deepen my knowledge in the field. I am particularly interested in creating apps and studying security systems.
          </p>
          <div className="flex space-x-4">
          <button
            onClick={() => window.location.href = 'https://drive.google.com/drive/folders/1ai6o8rC9WSfcmMefY8PTrE2IpWIRLZ0x?usp=drive_link'}
            className="bg-black text-white border-2 border-black font-bold py-2 px-4 md:py-3 md:px-6 rounded-full hover:bg-white hover:text-black duration-150"
            >
            Portofolio
            </button>
            <button
            onClick={() => window.location.href = 'https://id.linkedin.com/in/rafael-natanael-197704254'}
            className="bg-black text-white border-2 border-black font-bold py-2 px-4 md:py-3 md:px-6 rounded-full hover:bg-white hover:text-black duration-150"
            >
            LinkedIn
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
