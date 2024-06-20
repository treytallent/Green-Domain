import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { Testimonials } from "../components/Testimonials"
import { Feature2 } from "../components/Feature2"
import { Link } from "react-router-dom"
import { ChevronRightIcon } from "@heroicons/react/16/solid"
import { useEffect, useState } from "react"

const feature1Cards = [
   {
      title: "Sustainable Living Guide",
      body: "A one-stop shop for everything you need to know about sustainable living.",
      cta: "Placeholder CTA",
      path: "/livingguide",
      src: "src/assets/builder-img/builder_2_2.webp",
      alt: "image alt",
   },
   {
      title: "Sustainable Builders",
      body: "We collect and rate Perth's builders so you can get the best value for your money.",
      cta: "Find Your Builder",
      path: "/findabuilder",
      src: "src/assets/builder-img/builder_3_1.webp",
      alt: "image alt",
   },
   {
      title: "Community Blog",
      body: "Sustainable homeowners across Australia sharing their lessons to make your process easier.",
      cta: "Learn From Locals",
      path: "/community",
      src: "src/assets/community.webp",
      alt: "image alt",
   },
]

export function Home() {
   const [isVisible, setIsVisible] = useState(false)

   useEffect(() => {
      setIsVisible(true) // Trigger the fade-in effect after component mounts
   }, [])

   return (
      <div className={isVisible ? "fade-in" : ""}>
         <header className="max-w-7xl lg:mx-auto">
            <Navbar />
            <img
               src="/home-1.jpg"
               className="pl-4 mb-8 w-full object-cover rounded-bl-[50px] h-[50vh] sm:rounded-bl-[100px] sm:h-[70vh]"
               alt=""
            />
            <div className="mx-4 sm:mx-8 pb-12 grid grid-cols-4 gap-4 sm:grid-cols-12 lg:gap-x-8">
               <h1 className="text-warmgray-1000 tracking-tight text-5xl md:text-7xl lg:text-8xl col-span-4 sm:col-span-8">
                  Sustainable living starts here
               </h1>
               <p className="text-warmgray-700 col-span-4 sm:col-span-4 sm:col-start-9">
                  Building and living in a sustainable home should be easy. So
                  we made it that way.
               </p>
            </div>
         </header>
         <main>
            {/* Header */}
            <section className="pt-12 pb-24 px-4 sm:px-8 bg-warmgray-100">
               <div className="grid grid-cols-4 gap-4 max-w-7xl xl:mx-auto sm:grid-cols-12 xs:gap-x-8">
                  {feature1Cards.map(item => (
                     <div
                        key={item.title}
                        className="bg-white col-span-4 rounded-lg overflow-hidden border border-warmgray-200 hover:shadow-md p-1"
                     >
                        <img
                           src={item.src}
                           alt={item.alt}
                           className="bg-red-200 h-[232px] rounded-lg object-cover w-full"
                        />
                        <div className="p-4">
                           <h2 className="text-warmgray-1000 font-medium mb-4 sm:text-2xl">
                              {item.title}
                           </h2>
                           <p className="text-sm mb-8 text-warmgray-700">
                              {item.body}
                           </p>
                           <div className="flex text-cyan-700">
                              <Link
                                 to={item.path}
                                 className="text-xs font-medium"
                              >
                                 {item.cta}
                              </Link>
                              <ChevronRightIcon className="block h-4 w-4" />
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </section>
            {/* Feature 2 */}
            <section className="py-24 bg-warmgray-100 px-4 sm:px-8">
               <div className="max-w-7xl lg:mx-auto">
                  <h2 className="text-3xl mb-12 sm:text-4xl text-warmgray-1000 sm:text-center">
                     Sustainable homeowners can experience...
                  </h2>
                  <Feature2 />
               </div>
            </section>
            {/* Testimonials */}
            <section className="py-24 bg-warmgray-100 px-4 sm:px-8">
               <div className="max-w-7xl lg:mx-auto">
                  <h2 className="text-3xl mb-12 sm:text-4xl text-warmgray-1000 sm:text-center">
                     What our community has to say
                  </h2>
                  <div className="flex flex-col gap-8 md:items-start md:grid md:grid-cols-12">
                     <Testimonials />
                  </div>
               </div>
            </section>
         </main>
         <Footer />
      </div>
   )
}
