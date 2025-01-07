import React, { useState } from 'react';

function Profile() {
  const [joke, setJoke] = useState(''); // State to store the fetched joke
  const [error, setError] = useState(''); // State to store any errors

  // Function to fetch a random joke from the API Ninjas Joke API
  const fetchJoke = async () => {
    const apiKey = 'fX7T1C7tfPihcknIFXc6yQ==JnC8SNImZ1auTDWR'; // Your API key
    const url = 'https://api.api-ninjas.com/v1/jokes'; // Joke API endpoint (try without query params)

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'X-Api-Key': apiKey, // Pass the API key in the header
          'Content-Type': 'application/json', // Ensure the content-type is correct
        },
      });

      // Log the response to inspect it
      const responseData = await response.json();
      console.log('API Response:', responseData); // Inspect the raw response

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }

      if (responseData && responseData.length > 0) {
        setJoke(responseData[0]?.joke || 'No joke found');
        setError(''); // Reset error state if joke is fetched successfully
      } else {
        throw new Error('No joke found in response');
      }

    } catch (error) {
      console.error('Error fetching the joke:', error);
      setError('Failed to fetch joke. Please try again later.'); // Show error message
    }
  };

  return (
    <section className="container mx-auto px-6 py-24">
      <div className="flex flex-col md:flex-row items-center justify-between p-8 rounded-lg">
        {/* Left Content */}
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
          <h2 className="text-4xl font-extrabold mb-4 text-gray-900">History of Samsung</h2>
          <p className="text-black mb-6 leading-relaxed">
            Samsung, founded in 1938 by Lee Byung-chul in South Korea, started as a trading company dealing in groceries and textiles. Over the decades, it expanded into various industries, including food processing, insurance, and retail. In the 1960s, Samsung entered the electronics market, launching its first black-and-white television. By the 1980s, it had become a global leader in electronics, producing semiconductors, mobile phones, and consumer electronics. Samsung's rise in the tech industry was marked by significant innovation and investment in research and development, solidifying its position as one of the world's most influential technology companies. Today, Samsung is known for its leadership in sectors such as smartphones, semiconductors, displays, and home appliances.
          </p>
          <div className="flex space-x-4">
            <button
              onClick={fetchJoke} // Fetch a new joke when clicked
              className="bg-black text-white border-2 border-black font-bold py-2 px-4 md:py-3 md:px-6 rounded-full hover:bg-white hover:text-black duration-150 flex items-center"
            >
              <span className="text-sm md:text-lg">Generate Joke Today</span>
            </button>
          </div>
          {joke && <p className="mt-6 text-gray-700 italic">"{joke}"</p>} {/* Display the joke if available */}
          {error && <p className="mt-6 text-red-500 italic">{error}</p>} {/* Display error message if any */}
        </div>

        {/* Right Content (Image) */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/img/company.jpg"
            alt="Placeholder Image"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default Profile;
