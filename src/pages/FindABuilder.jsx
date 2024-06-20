import { useState, useEffect } from "react"
import { Filter } from "../components/Filter"
import builders from "../assets/json/builders.json"
import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"
import { Builder } from "../components/Builder"

const initialFilterOptions = [
   {
      id: "price",
      label: "Price Range",
      options: [
         { value: "low", label: "Budget ($)", checked: false },
         { value: "medium", label: "Mid-Range ($$)", checked: false },
         { value: "high", label: "Premium ($$$)", checked: false },
      ],
   },
   {
      id: "experience",
      label: "Experience Level",
      options: [
         { value: "new", label: "New Business", checked: false },
         { value: "fiveplus", label: "5+ Years Experience", checked: false },
         { value: "tenplus", label: "10+ Years Experience", checked: false },
      ],
   },
   {
      id: "expertise",
      label: "Expertise",
      options: [
         { value: "residential", label: "Residential", checked: false },
         { value: "renovations", label: "Renovations", checked: false },
         { value: "commercial", label: "Commercial", checked: false },
      ],
   },
]

export function FindABuilder() {
   const [filterOptions, setFilterOptions] = useState(initialFilterOptions)
   const [filteredBuilders, setFilteredBuilders] = useState(builders)

   useEffect(() => {
      const activeFilters = filterOptions.reduce((acc, curr) => {
         acc[curr.id] = curr.options
            .filter(option => option.checked)
            .map(option => option.value)
         return acc
      }, {})

      let filtered = builders.filter(builder => {
         return Object.keys(activeFilters).every(filterKey => {
            // Existing filtering logic
            if (filterKey === "expertise") {
               return (
                  activeFilters[filterKey].length === 0 ||
                  builder[filterKey].some(expertise =>
                     activeFilters[filterKey].includes(expertise)
                  )
               )
            } else {
               // Handle other filters
               return (
                  activeFilters[filterKey].length === 0 ||
                  activeFilters[filterKey].includes(builder[filterKey])
               )
            }
         })
      })

      // Sort builders by the number of reviews in descending order
      filtered = filtered.sort((a, b) => {
         // Treat null reviews as an empty array for both builders
         const aReviewsLength = a.reviews ? a.reviews.length : 0
         const bReviewsLength = b.reviews ? b.reviews.length : 0

         return bReviewsLength - aReviewsLength
      })

      setFilteredBuilders(filtered)
   }, [filterOptions, builders]) // Ensure 'builders' is also a dependency if it can change

   const [isVisible, setIsVisible] = useState(false)

   useEffect(() => {
      setIsVisible(true) // Trigger the fade-in effect after component mounts
   }, [])

   return (
      <div className={isVisible ? "fade-in" : ""}>
         <header className="bg-white border-b border-b-warmgray-300">
            <div className="max-w-7xl lg:mx-auto">
               <Navbar />
               <div className=" pt-24 px-4 sm:px-8">
                  <div className="pb-8">
                     <h1 className="text-3xl mb-2 sm:text-4xl  text-warmgray-1000">
                        Sustainable Builders
                     </h1>
                     <p className="text-warmgray-700 max-w-xl">
                        With over 5,000 builders across Western Australia, how
                        can you confidently choose? Skip the guesswork because
                        we have you covered.
                     </p>
                  </div>
                  <div className="flex gap-4 py-4">
                     <Filter
                        filterOptions={filterOptions}
                        setFilterOptions={setFilterOptions}
                     />
                  </div>
               </div>
            </div>
         </header>
         <main className="py-24 bg-warmgray-100 px-4 sm:px-8">
            <section className="grid grid-cols-4 gap-4 max-w-7xl xl:mx-auto sm:grid-cols-12 xs:gap-x-8">
               {filteredBuilders.map(builder => (
                  <Builder key={builder.id} {...builder} />
               ))}
            </section>
         </main>
         <Footer />
      </div>
   )
}
