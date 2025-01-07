import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Dashboard() {
  return (
    <div className="animate-fadeIn">
      <h1 className="text-4xl font-bold text-center mt-[130px]">Welcome to Samsung World!</h1>
      <p className="text-center mb-10">
        Sehubungan dengan libur tahun baru 2025. <br />
        Pesanan tgl 30 Des - 20 Jan akan mengalami keterlambatan pengiriman sekitar 2 - 3 hari kerja
      </p>

      {/* Carousel Section */}
      <div className="carousel-container mx-auto max-w-4xl">
        <Carousel showArrows={false} autoPlay={true} infiniteLoop={true} showThumbs={false}>
          <div>
            <img src="/img/carousel1.jpg" alt="Promo 1" />
          </div>
          <div>
            <img src="/img/carousel2.png" alt="Promo 2" />
          </div>
          <div>
            <img src="/img/carousel3.jpg" alt="Promo 3" />
          </div>
        </Carousel>
      </div>

      {/* Promo Section */}
      <h1 className="text-4xl font-bold text-center mt-[130px]">Promo Terbaru!</h1>
      <p className="text-center mb-10">Dapatkan Promo Baru Disini.</p>
      <div className="promo-section grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-5 mb-20">
        <div className="promo-item border p-4 rounded-lg shadow hover:shadow-lg hover:scale-105 transition-transform">
          <img
            src="/img/watchultra.webp"
            alt="Galaxy Watch Ultra"
            className="w-full"
          />
          <h3 className="text-lg font-bold mt-2">Galaxy Watch Ultra</h3>
          <a
            href="https://id.shp.ee/s9mZmUU"
            className="mt-2 px-4 py-2 bg-black text-white border-2 border-black font-bold rounded-full hover:bg-white hover:text-black duration-150 flex items-center justify-center"
          >
            <span className="text-sm md:text-lg">Pesan Sekarang!</span>
          </a>
        </div>
        <div className="promo-item border p-4 rounded-lg shadow hover:shadow-lg hover:scale-105 transition-transform">
          <img
            src="/img/galaxyring.jpg"
            alt="Galaxy Ring"
            className="w-full"
          />
          <h3 className="text-lg font-bold mt-2">Galaxy Ring</h3>
          <p>Mulai dari Rp541.583/bln</p>
          <a
            href="https://id.shp.ee/s9mZmUU"
            className="mt-2 px-4 py-2 bg-black text-white border-2 border-black font-bold rounded-full hover:bg-white hover:text-black duration-150 flex items-center justify-center"
          >
            <span className="text-sm md:text-lg">Pesan Sekarang!</span>
          </a>
        </div>
        <div className="promo-item border p-4 rounded-lg shadow hover:shadow-lg hover:scale-105 transition-transform">
          <img
            src="/img/s24fe.jpg"
            alt="Galaxy S24 FE"
            className="w-full"
          />
          <h3 className="text-lg font-bold mt-2">Galaxy S24 FE</h3>
          <p>Get 2X Memory Upgrade</p>
          <a
            href="https://id.shp.ee/s9mZmUU"
            className="mt-2 px-4 py-2 bg-black text-white border-2 border-black font-bold rounded-full hover:bg-white hover:text-black duration-150 flex items-center justify-center"
          >
            <span className="text-sm md:text-lg">Pesan Sekarang!</span>
          </a>
        </div>
        <div className="promo-item border p-4 rounded-lg shadow hover:shadow-lg hover:scale-105 transition-transform">
          <img
            src="/img/oven.jpeg"
            alt="Microwave Promo"
            className="w-full"
          />
          <h3 className="text-lg font-bold mt-2">Gratis Samyang Package</h3>
          <p>Senilai Rp250K</p>
          <a
            href="https://id.shp.ee/s9mZmUU"
            className="mt-2 px-4 py-2 bg-black text-white border-2 border-black font-bold rounded-full hover:bg-white hover:text-black duration-150 flex items-center justify-center"
          >
            <span className="text-sm md:text-lg">Pesan Sekarang!</span>
          </a>
        </div>
        <div className="promo-item border p-4 rounded-lg shadow hover:shadow-lg hover:scale-105 transition-transform">
          <img
            src="/img/tv.jpg"
            alt="Samsung AI TV"
            className="w-full"
          />
          <h3 className="text-lg font-bold mt-2">The New Era of Samsung AI TV</h3>
          <a
            href="https://id.shp.ee/s9mZmUU"
            className="mt-2 px-4 py-2 bg-black text-white border-2 border-black font-bold rounded-full hover:bg-white hover:text-black duration-150 flex items-center justify-center"
          >
            <span className="text-sm md:text-lg">Pesan Sekarang!</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
