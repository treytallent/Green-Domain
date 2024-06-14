import testimonials from "../assets/testimonials.json"

export function Testimonials() {
   return (
      <>
         {/* Left Column */}
         <div className="grid gap-8 md:col-start-1 md:col-span-3">
            {testimonials
               .filter(item => item.column === "left")
               .map(item => (
                  <div
                     key={item.id}
                     className={`bg-white rounded-lg shadow-md p-4 lg:p-8 ${
                        item.isLarge ? "md:col-span-6" : "md:col-span-3"
                     }`}
                  >
                     <p className="text-warmgray-1000 mb-4">{item.quote}</p>
                     <div className="flex">
                        <img
                           src={`src/assets/${item.image}.jpg`}
                           alt=""
                           className="w-8 h-8 rounded-full my-auto"
                        />
                        <div className="ml-2">
                           <h3 className="text-warmgray-1000">{item.name}</h3>
                           <p className="text-warmgray-600 text-sm">
                              {item.location}
                           </p>
                        </div>
                     </div>
                  </div>
               ))}
         </div>

         {/* Center Column */}
         <div className="grid gap-8 md:col-start-4 md:col-span-6">
            {testimonials
               .filter(item => item.column === "center")
               .map(item => (
                  <div
                     key={item.id}
                     className={`bg-white rounded-lg shadow-md p-4 lg:p-8 ${
                        item.isLarge ? "md:col-span-6" : "md:col-span-3"
                     }`}
                  >
                     <p className="text-warmgray-1000 mb-4">{item.quote}</p>
                     <div className="flex">
                        <img
                           src={`src/assets/${item.image}.jpg`}
                           alt=""
                           className="w-8 h-8 rounded-full my-auto"
                        />
                        <div className="ml-2">
                           <h3 className="text-warmgray-1000">{item.name}</h3>
                           <p className="text-warmgray-600 text-sm">
                              {item.location}
                           </p>
                        </div>
                     </div>
                  </div>
               ))}
         </div>
         {/* Right Column */}
         <div className="grid gap-8 md:col-start-10 md:col-span-3">
            {testimonials
               .filter(item => item.column === "right")
               .map(item => (
                  <div
                     key={item.id}
                     className={`bg-white rounded-lg shadow-md p-4 lg:p-8 ${
                        item.isLarge ? "md:col-span-6" : "md:col-span-3"
                     }`}
                  >
                     <p className="text-warmgray-1000 mb-4">{item.quote}</p>
                     <div className="flex">
                        <img
                           src={`src/assets/${item.image}.jpg`}
                           alt=""
                           className="w-8 h-8 rounded-full my-auto"
                        />
                        <div className="ml-2">
                           <h3 className="text-warmgray-1000">{item.name}</h3>
                           <p className="text-warmgray-600 text-sm">
                              {item.location}
                           </p>
                        </div>
                     </div>
                  </div>
               ))}
         </div>
      </>
   )
}
