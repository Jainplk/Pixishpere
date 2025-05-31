import React from 'react'
import Image from 'next/image'
import { IoLocationSharp } from "react-icons/io5"
import { PiCurrencyInr } from "react-icons/pi"
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import{FaStarHalfAlt} from 'react-icons/fa'
import Link from 'next/link';

const PhotographerCard = ({name, img, location, price, rating, review, id, tags}) => {

    const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<FaStar key={i} className="text-yellow-400" />);
    } else if (rating >= i - 0.5) {
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-yellow-400" />);
    }
  }


  return (
    <div className='px-4 py-3 mt-4 border border-gray-200 rounded-xl max-w-[400px] cursor-pointer shadow-lg transition transform hover:scale-105 hover:shadow-xl'>
        <div>
            <Image className='w-full h-auto rounded-lg mt-2'
            src={img}
            width={200}
            height={300}
            alt='profile-image'/>
    
        </div>

        <div className='space-y-2 py-2'>
            <h2 className='text-lg font-medium'>{name}</h2>
            <p className='text-gray-500 max-w-[150px] flex gap-1 items-center'><IoLocationSharp />{location}, India</p>
        </div>

        <div className="flex flex-wrap gap-2 mt-2">
          {tags?.map((tag, idx) => (
            <span
              key={idx}
              className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      

        <div className='flex flex-row mb-1 items-center gap-4'>
            <p className='flex gap-1'>{stars}</p>
            <p className='text-gray-600 font-semibold'>({review} review)</p>
        </div>

        <div className='font-bold'>
            <p className='flex items-center'><PiCurrencyInr />{price}</p> 
        </div>

        <Link href={`/portfolio/${id}`}>
        <button className='flex justify-center items-center p-2 border border-black w-full font-medium rounded-xl mt-3 cursor-pointer hover:bg-black hover:text-white'>View Profile</button>
        </Link>
        
      
    </div>
  )
}

export default PhotographerCard
