import { ChevronRightIcon } from "@heroicons/react/16/solid"
import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

const cards = [
   {
      title: "Fundamentals",
      body: "All of the concepts and features you will commonly encounter.",
      cta: "Placeholder CTA",
      path: "/livingguide/fundamentals",
      src: "/fundamentals.png",
      alt: "image alt",
      complete: true,
   },
   {
      title: "Buy, Build or Renovate?",
      body: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
      cta: "Placeholder CTA",
      path: "",
      src: "/placeholder.webp",
      alt: "image alt",
      complete: false,
   },
   {
      title: "Home Buying Process",
      body: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
      cta: "Placeholder CTA",
      path: "",
      src: "/placeholder.webp",
      alt: "image alt",
      complete: false,
   },
]

export function LivingGuide() {
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
                        Sustainable Living Guide
                     </h1>
                     <p className="text-warmgray-700 max-w-xl">
                        We understand how daunting and complicated sustainable
                        living can seem; our guides provide bite-sized chunks of
                        information for you to start today.
                     </p>
                  </div>
               </div>
            </div>
         </header>
         <main className="py-24 bg-warmgray-100 px-4 sm:px-8">
            <section className="grid grid-cols-4 gap-4 max-w-7xl xl:mx-auto sm:grid-cols-12 xs:gap-x-8">
               {cards.map(item => (
                  <div
                     key={item.title}
                     className={`bg-white col-span-4 rounded-lg overflow-hidden border border-warmgray-200 hover:shadow-md p-1 ${
                        item.complete ? null : "opacity-50"
                     }`}
                  >
                     <img
                        src={item.src}
                        alt={item.alt}
                        className="bg-red-200 h-[232px] w-full rounded-lg object-cover"
                     />
                     <div className="p-4">
                        <h2 className="text-warmgray-1000 font-medium mb-4 sm:text-2xl">
                           {item.title}
                        </h2>
                        <p className="text-sm mb-8 text-warmgray-700">
                           {item.body}
                        </p>
                        <div className="flex text-cyan-700">
                           <Link to={item.path} className="text-xs font-medium">
                              {item.cta}
                           </Link>
                           <ChevronRightIcon className="block h-4 w-4" />
                        </div>
                     </div>
                  </div>
               ))}
            </section>
         </main>
         <Footer />
      </div>
   )
}
