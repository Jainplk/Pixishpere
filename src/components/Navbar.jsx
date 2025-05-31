'use client'
import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { usePathname } from 'next/navigation'
import { useFilter } from '@/app/context/FilterContext'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import Link from 'next/link'

const Navbar = () => {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [showFilters, setShowFilters] = useState(false)

  const {
    setSearchTerm,
    priceRange, setPriceRange,
    minRating, setMinRating,
    selectedStyles, setSelectedStyles,
    sortOption, setSortOption
  } = useFilter()

  const stylesList = ['Traditional', 'Outdoor', 'Studio', 'Candid']

  const handleStyleChange = (style) => {
    setSelectedStyles((prev) =>
      prev.includes(style) ? prev.filter((s) => s !== style) : [...prev, style]
    )
  }

  return (
    <div className="bg-white md:shadow-md sticky top-0 z-50 px-4 py-4 sm:px-8">
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-10">
        <div className="flex justify-between items-center w-full sm:w-auto">
          <Link href={'/'}>
            <div className="text-xl font-bold text-gray-800 whitespace-nowrap md:text-4xl cursor-pointer">
              📸 Pixisphere
            </div>
          </Link>

          {isHome && (
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="bg-black text-white px-6 py-2 rounded-lg text-[18px] font-medium flex items-center gap-2 cursor-pointer sm:hidden"
            >
              Filters {showFilters ? <FaChevronUp /> : <FaChevronDown />}
            </button>
          )}
        </div>

        {/* Search bar row on small screens (full width) */}
        {isHome && (
          <div className="relative w-full sm:flex-grow sm:w-auto">
            <input
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              placeholder="Search by name, location, tags..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-1 focus:ring-black"
            />
            <BsSearch className="absolute right-3 top-3 text-gray-500" />
          </div>
        )}

        {/* Filter button visible only on medium+ screens */}
        {isHome && (
          <div className="relative hidden sm:block">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="bg-black text-white md:px-6 py-2 rounded-lg text-[18px] font-medium flex items-center gap-2 cursor-pointer"
            >
              Filters {showFilters ? <FaChevronUp /> : <FaChevronDown />}
            </button>
          </div>
        )}
      </div>

      {/* Filter Dropdown */}
      {showFilters && isHome && (
        <div className="absolute top-full mt-2 right-4 sm:right-8 w-[280px] sm:w-[320px] bg-white shadow-lg rounded-lg border border-gray-200 p-4 z-50 space-y-4">

          {/* Price Range */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Max Price: ₹{priceRange[1]}</label>
            <input
              type="range"
              min="0"
              max="20000"
              step="500"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
              className="w-full mt-1 cursor-pointer accent-black"
              style={{
                WebkitAppearance: 'none',
                height: '6px',
                borderRadius: '4px',
                background: '#ddd',
              }}
              onInput={(e) => {
                e.target.style.background = `linear-gradient(to right, black 0%, black ${(e.target.value / 20000) * 100}%, #ddd ${(e.target.value / 20000) * 100}%, #ddd 100%)`
              }}
            />
          </div>

          {/* Rating */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Minimum Rating</label>
            <select
              value={minRating}
              onChange={(e) => setMinRating(parseFloat(e.target.value))}
              className="w-full mt-1 border border-black rounded-lg px-3 py-2 text-sm cursor-pointer focus:outline-none focus:ring-1 focus:ring-black"
            >
              {[0, 3, 4, 4.5].map((rating) => (
                <option
                  key={rating}
                  value={rating}
                  className="text-black cursor-pointer hover:bg-black hover:text-white"
                >
                  {rating === 0 ? 'All Ratings' : `${rating}+ Stars`}
                </option>
              ))}
            </select>
          </div>

          {/* Styles */}
          <div>
            <p className="block text-sm font-medium text-gray-700 mb-1">Styles</p>
            <div className="flex flex-wrap gap-3 max-h-[100px] overflow-y-auto">
              {stylesList.map((style) => (
                <label
                  key={style}
                  className="text-sm whitespace-nowrap flex items-center gap-1 cursor-pointer select-none"
                >
                  <input
                    type="checkbox"
                    checked={selectedStyles.includes(style)}
                    onChange={() => handleStyleChange(style)}
                    className="accent-black cursor-pointer"
                  />
                  {style}
                </label>
              ))}
            </div>
          </div>

          {/* Sort */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Sort By</label>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="w-full mt-1 border border-black rounded-lg px-3 py-2 text-sm cursor-pointer focus:outline-none focus:ring-1 focus:ring-black"
            >
              <option className="text-black cursor-pointer hover:bg-black hover:text-white" value="">
                Default
              </option>
              <option className="text-black cursor-pointer hover:bg-black hover:text-white" value="lowToHigh">
                Price: Low to High
              </option>
              <option className="text-black cursor-pointer hover:bg-black hover:text-white" value="highToLow">
                Price: High to Low
              </option>
            </select>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar

