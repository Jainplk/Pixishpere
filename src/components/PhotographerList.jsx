'use client'
import PhotographerCard from '@/components/PhotographerCard'
import { useFilter } from '@/app/context/FilterContext'
import data from '@/data/db.json'

export default function HomePage() {
  const {
    searchTerm, priceRange, minRating, selectedStyles, sortOption
  } = useFilter()

  const filtered = data.photographers.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))

    const withinPrice = p.price <= priceRange[1]
    const meetsRating = p.rating >= minRating
    const matchesStyles = selectedStyles.length === 0 || selectedStyles.some(style => p.styles.includes(style))

    return matchesSearch && withinPrice && meetsRating && matchesStyles
  })

  // Sorting
  const sorted = [...filtered].sort((a, b) => {
    if (sortOption === 'lowToHigh') return a.price - b.price
    if (sortOption === 'highToLow') return b.price - a.price
    return 0
  })

  return (
    <div className='py-15 md:px-25 px-10 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {sorted.map((person) => (
        <PhotographerCard
          key={person.id}
          id={person.id}
          name={person.name}
          img={person.profilePic}
          location={person.location}
          price={person.price}
          rating={person.rating}
          review={person.reviews.length}
          tags={person.tags}
        />
      ))}
    </div>
  )
}

