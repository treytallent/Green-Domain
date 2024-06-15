import { useState } from "react"

const features = [
   {
      id: 1,
      isActive: true,
      title: "Financial Independence",
      body: "Sustainable homes reduce energy consumption by 56-60%. Reinvested into your home loan can save you up to $115,000 in interest fees on an average-sized home.",
      link: "https://new.gbca.org.au/sustainable-homes/financial-benefits/",
      image: "Man1",
      caption:
         "A vaulted living space with northern aspect at Bardolph Gardens allows sunlight to penetrate the concrete slab, keeping the house warm in winter and cool in summer.",
   },
   {
      id: 2,
      isActive: false,
      title: "Negative Carbon Emissions",
      body: "Combining energy-efficient designs and renewable energy systems, sustainable homes can achieve net zero or negative carbon emissions by exporting excess energy into the grid.",
      link: "https://www.yourhome.gov.au/live-adapt/zero-carbon",
      image: "Man2",
      caption: "",
   },
   {
      id: 3,
      isActive: false,
      title: "Year-Round Comfort",
      body: "Sustainable homes can combine passive heating and cooling, utilising the sun, shade and airflow to keep your home comfortable year-round without air conditioners or heaters.",
      link: "https://www.yourhome.gov.au/passive-design",
      image: "Man3",
      caption: "",
   },
]

export function Feature2() {
   const [activeFeature, setActiveFeature] = useState(
      features.find(item => item.id === 1)
   )

   return (
      <>
         {/* Mobile */}
         <div className="sm:hidden">
            <div className="bg-white p-4 rounded-tl-md rounded-tr-md shadow-md sm:p-8">
               {/* Button & state modification */}
               <div className="flex flex-col gap-4">
                  {features.map(item => (
                     <div key={item.id} className="">
                        <button
                           key={item.id}
                           className={`text-md p-2 rounded-md text-sm ${
                              item.id === activeFeature.id
                                 ? "text-white bg-cyan-800"
                                 : "text-cyan-800 border  border-cyan-700"
                           }`}
                           onClick={() => setActiveFeature(item)}
                        >
                           {item.title}
                        </button>
                     </div>
                  ))}
               </div>
               {/* Body and link */}
               <div>
                  <p className="my-8 text-warmgray-1000">
                     {activeFeature.body}
                  </p>
                  <a
                     href={activeFeature.link}
                     className="text-sm font-medium text-cyan-800"
                  >
                     Read More
                  </a>
               </div>
            </div>
            <div className="mt-[-3px]">
               <img
                  src={`src/assets/${activeFeature.image}.jpg`}
                  alt=""
                  className="rounded-md shadow-md"
               />
               <p className="text-sm mt-4 text-warmgray-700">
                  {activeFeature.caption}
               </p>
            </div>
         </div>
         {/* Desktop */}
         <div className="hidden sm:grid grid-cols-12 row-gap-8">
            {features.map(item => (
               <div
                  className={`col-start-1 lg:col-start-2  col-span-6 p-8 cursor-pointer ${
                     item.id === activeFeature.id
                        ? "bg-white rounded-tl-md rounded-bl-md shadow-md"
                        : null
                  }`}
                  key={item.id}
                  onClick={() => setActiveFeature(item)}
               >
                  <h3 className="text-warmgray-1000 text-2xl">{item.title}</h3>
                  <p className="text-warmgray-700">{item.body}</p>
                  {item.id === activeFeature.id ? (
                     <div className="mt-4">
                        <a
                           href={activeFeature.link}
                           className="text-sm font-medium text-cyan-800"
                        >
                           Read More
                        </a>
                     </div>
                  ) : null}
               </div>
            ))}
            <div className="col-start-7 lg:col-start-8 col-span-6 lg:col-span-5 row-start-1 row-span-3">
               <img
                  src={`src/assets/${activeFeature.image}.jpg`}
                  alt=""
                  className="rounded-md shadow-md min-h-full object-cover"
               />
               <p className="text-sm mt-4 text-warmgray-700">
                  {activeFeature.caption}
               </p>
            </div>
         </div>
      </>
   )
}
