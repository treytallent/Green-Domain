import { Link } from "react-router-dom"

export function Footer() {
   return (
      <footer className="bg-warmgray-1000 pt-12 px-4 sm:px-8">
         <div className="max-w-7xl lg:mx-auto grid grid-cols-4 gap-8 sm:grid-cols-12">
            <div className="col-span-4 sm:col-span-6 lg:col-span-5">
               <p className="text-white font-medium mb-4 sm:font-normal sm:text-xl lg:text-2xl">
                  Your Home, Your Planet, Your Choice.
               </p>
               <p className="text-warmgray-500 font-medium sm:font-normal sm:text-xl lg:text-2xl">
                  Helping Australians make the transition to sustainable living
                  since 2024.
               </p>
               <div className="flex gap-4 mt-4 mb-8">
                  <a href="https://www.instagram.com/" className="my-auto">
                     <img
                        src="src/assets/svg/instagram.svg"
                        alt="Instagram Logo"
                     />
                  </a>
                  <a href="https://www.facebook.com/" className="my-auto">
                     <img
                        src="src/assets/svg/facebook.svg"
                        alt="Facebook Logo"
                     />
                  </a>
               </div>
            </div>
            <div className="col-span-4 sm:col-span-6 sm:col-start-7 grid grid-cols-4 gap-8 md:grid-cols-6">
               <div className="col-span-4 md:col-span-2 flex flex-col gap-4">
                  <Link to={null} className="text-sm text-white font-medium">
                     Sustainable Living
                  </Link>
                  <Link
                     to={null}
                     className="text-sm text-warmgray-500 font-medium"
                  >
                     Fundamentals
                  </Link>
                  <Link
                     to={null}
                     className="text-sm text-warmgray-500 font-medium"
                  >
                     Buy, Build, or Renovate?
                  </Link>
                  <Link
                     to={null}
                     className="text-sm text-warmgray-500 font-medium"
                  >
                     Home Buying Process
                  </Link>
               </div>
               <div className="col-span-4 md:col-span-2 flex flex-col gap-4">
                  <Link to={null} className="text-sm text-white font-medium">
                     Sustainable Builders
                  </Link>
                  <Link
                     to={null}
                     className="text-sm text-warmgray-500 font-medium"
                  >
                     First Home Builders
                  </Link>
                  <Link
                     to={null}
                     className="text-sm text-warmgray-500 font-medium"
                  >
                     Single Storey Builders
                  </Link>

                  <Link
                     to={null}
                     className="text-sm text-warmgray-500 font-medium"
                  >
                     Double Storey Builders
                  </Link>
               </div>
               <div className="col-span-4 md:col-span-2 flex flex-col gap-4">
                  <Link to={null} className="text-sm text-white font-medium">
                     Community
                  </Link>
                  <Link
                     to={null}
                     className="text-sm text-warmgray-500 font-medium"
                  >
                     What’s New
                  </Link>
                  <Link
                     to={null}
                     className="text-sm text-warmgray-500 font-medium"
                  >
                     Success Stories
                  </Link>
                  <Link
                     to={null}
                     className="text-sm text-warmgray-500 font-medium"
                  >
                     Featured Homes
                  </Link>
                  <Link
                     to={null}
                     className="text-sm text-warmgray-500 font-medium"
                  >
                     Do-It-Yourself
                  </Link>
               </div>
            </div>
            <div className="mt-24 mb-4 col-span-4 sm:col-span-12">
               <p className="text-sm text-center text-warmgray-600">
                  © Green Domain, Inc. All rights reserved.
               </p>
            </div>
         </div>
      </footer>
   )
}
