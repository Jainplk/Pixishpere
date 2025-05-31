'use client'
import React, { createContext, useContext, useState } from 'react'

const FilterContext = createContext()

export const FilterProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [priceRange, setPriceRange] = useState([0, 20000])
  const [minRating, setMinRating] = useState(0)
  const [selectedStyles, setSelectedStyles] = useState([])
  const [sortOption, setSortOption] = useState('')

  return (
    <FilterContext.Provider value={{
      searchTerm, setSearchTerm,
      priceRange, setPriceRange,
      minRating, setMinRating,
      selectedStyles, setSelectedStyles,
      sortOption, setSortOption
    }}>
      {children}
    </FilterContext.Provider>
  )
}

export const useFilter = () => useContext(FilterContext)
