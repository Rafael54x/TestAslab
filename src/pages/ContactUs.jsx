import React, { useEffect } from 'react';

function ContactUs() {
  return (
    <section className="relative mx-auto text-center pt-24 mb-10 p-4">
      <div className="animate-fadeIn">
        <h1 className="text-3xl font-bold mb-6 mt-10">CONTACT US</h1>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
          <img 
            src="/img/companyid.jpg" 
            alt="Company" 
            className="w-full md:w-1/2 lg:w-1/3 rounded-lg shadow-md" 
            data-aos="fade-right" 
          /> 
          <div className="text-left space-y-4">
            <p>📍 Samsung Research America Headquarters. Mountain View.<br />
            665 Clyde Avenue Mountain View, CA 94043 Phone: (650) 210-1001.</p>
            <p>✉️ <a href="mailto:cs.care@samsung.com" className="hover:underline">cs.care@samsung.com</a></p>
          </div>
        </div>

        {/* Centering iframe */}
        <h1 className="text-3xl font-bold mb-6 mt-10">LOCATION</h1>
        <div className="mt-8 flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.519121267973!2d-122.04766839999999!3d37.4012031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb782eded4179%3A0x18156a7af3f3f36d!2sSamsung%20Research%20America!5e0!3m2!1sid!2sid!4v1736230246355!5m2!1sid!2sid"
            width="600" 
            height="450" 
            style={{ border: 0 }}
            allowFullScreen="" 
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
