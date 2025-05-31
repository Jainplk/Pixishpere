
import React from 'react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { IoLocationSharp } from "react-icons/io5";
import { PiCurrencyInr } from "react-icons/pi";

const PhotographerPortfolio = ({ photographer }) => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        {/* Profile Image */}
        <Image
          src={photographer.profilePic}
          width={300}
          height={300}
          alt={photographer.name}
          className="rounded-xl object-cover shadow-md"
        />

        {/* Details */}
        <div className="space-y-3">
          <h1 className="text-3xl font-bold">{photographer.name}</h1>
          <p className="text-gray-600 flex items-center gap-1"><IoLocationSharp /> {photographer.location}, India</p>
          <p className="text-gray-700">{photographer.bio}</p>

          {/* Styles & Tags */}
          <div className="flex flex-wrap gap-2 mt-2">
            {photographer.styles.map((style, index) => (
              <span key={index} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">{style}</span>
            ))}
            {photographer.tags.map((tag, index) => (
              <span key={index} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">{tag}</span>
            ))}
          </div>

          {/* Price & Rating */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mt-4">
            <div className="text-lg font-semibold flex items-center gap-1 text-gray-800">
              <PiCurrencyInr /> {photographer.price}
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={`text-yellow-400 ${i < Math.round(photographer.rating) ? 'fill-current' : 'text-gray-300'}`} />
              ))}
              <span className="text-sm text-gray-600 ml-2">{photographer.rating} ({photographer.reviews.length} reviews)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Portfolio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {photographer.portfolio.map((img, index) => (
            <Image
              key={index}
              src={img}
              width={400}
              height={300}
              alt={`Portfolio ${index + 1}`}
              className="rounded-lg object-cover shadow-md"
            />
          ))}
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-10 md:w-1/2 w-full">
        <h2 className="text-2xl font-semibold mb-4 ">Client Reviews</h2>
        <div className="space-y-4">
          {photographer.reviews.map((review, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-md shadow-sm">
              <p className="text-sm text-gray-600 mb-1">{review.date}</p>
              <p className="font-semibold">{review.name}</p>
              <p className="text-gray-700 italic">"{review.comment}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotographerPortfolio;

