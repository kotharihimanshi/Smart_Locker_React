import React, { useState } from 'react';

const lockerData = {
  Bangalore: [
    { name: 'MG Road Metro', lat: 12.975, lng: 77.605 },
    { name: 'Forum Mall', lat: 12.9345, lng: 77.6101 },
    { name: 'Electronic City', lat: 12.8398, lng: 77.6770 },
    { name: 'Whitefield', lat: 12.9698, lng: 77.7499 },
    { name: 'Hebbal Flyover', lat: 13.0350, lng: 77.5913 },
    { name: 'Yeshwanthpur Station', lat: 13.0282, lng: 77.5410 },
  ],
  Mumbai: [
    { name: 'Andheri Station', lat: 19.1197, lng: 72.8468 },
    { name: 'Phoenix Mall', lat: 19.0758, lng: 72.8777 },
    { name: 'Bandra West', lat: 19.0600, lng: 72.8333 },
    { name: 'Powai', lat: 19.1170, lng: 72.9055 },
    { name: 'Churchgate Station', lat: 18.9359, lng: 72.8267 },
    { name: 'Dadar Market', lat: 19.0176, lng: 72.8485 },
  ],
  Delhi: [
    { name: 'Connaught Place', lat: 28.6315, lng: 77.2167 },
    { name: 'Saket Metro', lat: 28.5196, lng: 77.2066 },
    { name: 'Noida Sector 18', lat: 28.5700, lng: 77.3250 },
    { name: 'Kashmere Gate ISBT', lat: 28.6672, lng: 77.2263 },
    { name: 'Lajpat Nagar', lat: 28.5675, lng: 77.2430 },
    { name: 'Rajiv Chowk', lat: 28.6333, lng: 77.2167 },
  ],
};

const FindLockers = () => {
  const cities = Object.keys(lockerData);
  const [selectedCity, setSelectedCity] = useState(cities[0]);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredLocations = lockerData[selectedCity].filter(loc =>
    loc.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDirections = (lat, lng) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=driving`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white pt-24 px-6 md:px-20">
      <h1 className="text-4xl font-bold mb-6 text-center">Where Can You Find Lockers?</h1>
      <p className="mb-6 text-lg text-center max-w-2xl mx-auto">
        Choose your city and find the closest SmartLocker near you.
      </p>

     
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-10">
        <select
          value={selectedCity}
          onChange={e => setSelectedCity(e.target.value)}
          className="p-2 rounded-md bg-gray-200 dark:bg-gray-800"
        >
          {cities.map(city => (
            <option key={city}>{city}</option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Search location..."
          className="p-2 rounded-md w-full md:w-1/3 bg-gray-100 dark:bg-gray-800"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>

     
      {filteredLocations.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredLocations.map((loc, index) => (
            <div key={index} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{loc.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                This location has 24/7 accessible SmartLockers.
              </p>
              <button
                onClick={() => handleDirections(loc.lat, loc.lng)}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
              >
                Get Directions
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center mt-10 text-gray-500">No lockers found in your search.</p>
      )}
    </div>
  );
};

export default FindLockers;
