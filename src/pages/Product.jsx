import React, { useState } from 'react';

function Product() {
  // Sample product data
  const products = [
    {
      name: "Galaxy Watch Ultra",
      price: 7499000,
      releaseDate: "August 2023",
      image: "/img/watchultra.webp",
    },
    {
      name: "Galaxy Ring",
      price: 6499000,
      releaseDate: "November 2023",
      image: "/img/galaxyring.jpg",
    },
    {
      name: "Galaxy S24 FE",
      price: 10999000,
      releaseDate: "January 2024",
      image: "/img/s24fe.jpg",
    },
    {
      name: "Microwave Promo",
      price: 2399000,
      releaseDate: "December 2023",
      image: "/img/oven.jpeg",
    },
    {
      name: "Samsung AI TV",
      price: 12499000,
      releaseDate: "October 2023",
      image: "/img/tv.jpg",
    },
    {
      name: "Samsung Refrigerator",
      price: 8999000,
      releaseDate: "June 2023",
      image: "/img/fridge.webp",
    },
    {
      name: "Samsung A55",
      price: 5499000,
      releaseDate: "May 2023",
      image: "/img/a55.jpg",
    },
    {
      name: "Samsung A35",
      price: 3699000,
      releaseDate: "April 2023",
      image: "/img/a35.avif",
    },
    {
      name: "Samsung A15",
      price: 2199000,
      releaseDate: "March 2023",
      image: "/img/a15.webp",
    },
    {
      name: "Samsung M11",
      price: 1699000,
      releaseDate: "February 2023",
      image: "/img/m11.jpg",
    },
    {
      name: "Samsung M12",
      price: 1799000,
      releaseDate: "January 2023",
      image: "/img/m12.jpg",
    },
    {
      name: "Samsung M22",
      price: 3299000,
      releaseDate: "December 2023",
      image: "/img/m22.jpg",
    },
    {
      name: "Samsung Odyssey",
      price: 7999000,
      releaseDate: "September 2023",
      image: "/img/oddysey.jpg",
    },
    {
      name: "Smart Chef Microwave",
      price: 2199000,
      releaseDate: "October 2023",
      image: "/img/oven1.jpg",
    },
    {
      name: "Samsung Neo TV",
      price: 10799000,
      releaseDate: "December 2023",
      image: "/img/neo.jpg",
    },
    {
      name: "Samsung CoolMax Fridge",
      price: 9499000,
      releaseDate: "November 2023",
      image: "/img/max.avif",
    },
    {
      name: "Samsung A90 Smartphone",
      price: 6999000,
      releaseDate: "December 2022",
      image: "/img/a90.webp",
    },
    {
      name: "Samsung X-Series Tablet",
      price: 7299000,
      releaseDate: "December 2020",
      image: "/img/xtab.avif",
    },
    {
      name: "Samsung Giga Speakers",
      price: 3999000,
      releaseDate: "January 2021",
      image: "/img/giga.webp",
    },
    {
      name: "Samsung Galaxy Buds Pro",
      price: 2299000,
      releaseDate: "August 2023",
      image: "/img/buds.webp",
    },
    {
      name: "Samsung Z Fold 4",
      price: 16999000,
      releaseDate: "December 2022",
      image: "/img/fold4.jpg",
    },
  ];

  // State for sorting option (by name, by date, or by price)
  const [sortBy, setSortBy] = useState('date'); // default sorting by date

  // Function to handle sorting
  const sortProducts = (products) => {
    return products.sort((a, b) => {
      if (sortBy === 'date') {
        const dateA = new Date(a.releaseDate);
        const dateB = new Date(b.releaseDate);
        return dateB - dateA; // Sort by release date (newest first)
      } else if (sortBy === 'name') {
        return a.name.localeCompare(b.name); // Sort by name alphabetically
      } else if (sortBy === 'price') {
        return a.price - b.price; // Sort by price (lowest first)
      }
      return 0;
    });
  };

  return (
    <div className="animate-fadeIn">
      <h1 className="text-4xl font-bold text-center mt-[130px]">Product List</h1>
      <p className="text-center mb-10">Explore our exclusive range of Samsung products.</p>

      {/* Sorting Dropdown */}
      <div className="text-center mb-4">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border rounded p-2"
        >
          <option value="date">Sort by Release Date</option>
          <option value="name">Sort by Name</option>
          <option value="price">Sort by Price</option>
        </select>
      </div>

      {/* Product Cards Section */}
      <div className="product-section grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 mt-10 px-5 mb-20">
        {sortProducts(products).map((product, index) => (
          <div key={index} className="product-item border p-3 rounded-lg shadow hover:shadow-lg hover:scale-105 transition-transform">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <h3 className="text-lg font-bold mt-2">{product.name}</h3>
            <p className="text-sm text-gray-600">{product.price.toLocaleString()}</p>
            <p className="mt-2 font-semibold">{product.price.toLocaleString()}</p>
            <p className="mt-1 text-sm text-gray-500">Released: {product.releaseDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
