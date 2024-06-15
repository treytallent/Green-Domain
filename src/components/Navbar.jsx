import { useState } from "react"
import { Link } from "react-router-dom"

export function Navbar() {
   const [isOpen, setIsOpen] = useState(false)

   const navigation = [
      {
         label: "Home",
         path: "/",
      },
      {
         label: "Sustainable Living Guide",
         path: "/livingguide",
      },
      {
         label: "Sustainable Builders",
         path: "/findabuilder",
      },
      {
         label: "Community",
         path: "/community",
      },
   ]

   return (
      <nav className="bg-none absolute w-full">
         <div className="mx-8 py-2 sm:py-4">
            <div className="flex justify-between">
               {/* Title and Links */}
               <div className="flex items-center  sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 flex">
                     <Link to={"/"}>
                        <img
                           src="./src/assets/logo.svg"
                           alt="Green Domain logo"
                        />
                     </Link>
                  </div>
                  <div className="hidden sm:block sm:ml-6 sm:my-auto">
                     <div className="flex space-x-4">
                        {navigation.map(item => (
                           <Link
                              key={item.label}
                              to={item.path}
                              className={
                                 "text-white hover:text-cyan-700 text-sm font-medium"
                              }
                           >
                              {item.label}
                           </Link>
                        ))}
                     </div>
                  </div>
               </div>
               {/* Toggle Button */}
               <div className="flex items-center sm:hidden">
                  <button
                     onClick={() => setIsOpen(!isOpen)}
                     className="p-2 rounded-md hover:text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  >
                     <span className="sr-only">Open main menu</span>
                     <svg
                        className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="white"
                        aria-hidden="true"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth="2"
                           d="M4 6h16M4 12h16M4 18h16"
                        />
                     </svg>
                     <svg
                        className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="white"
                        aria-hidden="true"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth="2"
                           d="M6 18L18 6M6 6l12 12"
                        />
                     </svg>
                  </button>
               </div>
            </div>
         </div>
         <div className={`${isOpen ? "relative" : "hidden"} sm:hidden`}>
            <div className="flex flex-col bg-white rounded-b-lg">
               {navigation.map(item => (
                  <Link
                     key={item.label}
                     to={item.path}
                     className={
                        "text-warmgray-1000 hover:bg-cyan-700 hover:text-white px-4 py-4 text-sm font-medium"
                     }
                  >
                     {item.label}
                  </Link>
               ))}
            </div>
         </div>
      </nav>
   )
}
