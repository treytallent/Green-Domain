import {
   BuildingOffice2Icon,
   HomeModernIcon,
   StarIcon,
   WrenchScrewdriverIcon,
} from "@heroicons/react/16/solid"
import { BuilderModal } from "./BuilderModal"
import { useState } from "react"

export function Builder({
   builder,
   id,
   name,
   description,
   location,
   contact,
   website,
   price,
   image1,
   image2,
   image3,
   experience,
   expertise,
   rating,
   reviews,
}) {
   const priceRender = price => {
      if (price == "low") return "$"
      else if (price == "medium") return "$$"
      else if (price == "high") return "$$$"
      else return null
   }

   const experienceRender = experience => {
      if (experience == "new")
         return (
            <>
               <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     d="M11.2333 8.69926C10.7088 9.01809 10.1064 9.18577 9.49262 9.18379C8.97839 9.17972 8.46999 9.07455 7.99637 8.87426C7.63133 9.38959 7.43597 10.0059 7.43746 10.6374V12.2501C7.43759 12.3101 7.42539 12.3695 7.40161 12.4245C7.37784 12.4796 7.34299 12.5292 7.29925 12.5702C7.2555 12.6112 7.20379 12.6428 7.14731 12.663C7.09084 12.6832 7.03082 12.6916 6.97097 12.6876C6.85852 12.6778 6.75393 12.6259 6.67816 12.5422C6.6024 12.4585 6.56107 12.3493 6.56246 12.2364V11.5561L4.45043 9.4441C4.13647 9.56123 3.80442 9.62249 3.46933 9.62511C3.00802 9.62631 2.55534 9.50008 2.16121 9.26035C0.969569 8.53629 0.328084 6.86996 0.452225 4.80113C0.458475 4.6941 0.50381 4.59309 0.579622 4.51728C0.655433 4.44147 0.756443 4.39613 0.863475 4.38988C2.9323 4.26793 4.59863 4.90722 5.32051 6.09886C5.60412 6.56594 5.72794 7.11267 5.67324 7.65636C5.66984 7.69849 5.65431 7.73873 5.62853 7.77221C5.60274 7.8057 5.56781 7.831 5.52796 7.84506C5.4881 7.85912 5.44503 7.86133 5.40394 7.85142C5.36286 7.84152 5.32552 7.81993 5.29644 7.78926L4.24644 6.69004C4.16373 6.61145 4.05359 6.56829 3.93951 6.56975C3.82542 6.57121 3.71642 6.61718 3.63575 6.69786C3.55507 6.77853 3.5091 6.88753 3.50764 7.00161C3.50618 7.1157 3.54934 7.22584 3.62793 7.30855L6.57449 10.33C6.57777 10.2874 6.5816 10.2447 6.58598 10.2026C6.68165 9.39146 7.03958 8.63374 7.60535 8.04465L10.372 5.12105C10.4541 5.03903 10.5002 4.92776 10.5003 4.81171C10.5003 4.69567 10.4543 4.58436 10.3723 4.50226C10.2902 4.42017 10.179 4.37402 10.0629 4.37397C9.94688 4.37392 9.83557 4.41997 9.75348 4.50199L7.07379 7.3359C7.04697 7.36431 7.01302 7.38502 6.97549 7.39587C6.93795 7.40672 6.89819 7.40732 6.86035 7.39761C6.8225 7.3879 6.78795 7.36823 6.76028 7.34064C6.73261 7.31305 6.71283 7.27856 6.70301 7.24074C6.44379 6.2848 6.55808 5.33324 7.05301 4.51621C8.02973 2.90402 10.3025 2.04105 13.1332 2.2073C13.2402 2.21355 13.3412 2.25889 13.417 2.3347C13.4928 2.41051 13.5382 2.51152 13.5444 2.61855C13.7085 5.44972 12.8455 7.72254 11.2333 8.69926Z"
                     fill="#625D52"
                  />
               </svg>
               <p>New Business</p>
            </>
         )
      else if (experience == "fiveplus")
         return (
            <>
               <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     d="M6.41675 12.25V9.765C6.14258 9.86417 5.85091 9.91667 5.54175 9.91667C4.08341 9.91667 2.91675 8.75 2.91675 7.29167C2.91675 6.55083 3.20841 5.88583 3.71008 5.4075C3.57591 5.0925 3.50008 4.7425 3.50008 4.375C3.50008 2.91667 4.66675 1.75 6.12508 1.75C7.03508 1.75 7.84008 2.21667 8.31258 2.91667H8.45841C8.87974 2.91667 9.29694 2.99965 9.68619 3.16089C10.0754 3.32212 10.4291 3.55844 10.727 3.85637C11.025 4.15429 11.2613 4.50797 11.4225 4.89722C11.5838 5.28648 11.6667 5.70368 11.6667 6.125C11.6667 6.54632 11.5838 6.96352 11.4225 7.35278C11.2613 7.74203 11.025 8.09571 10.727 8.39363C10.4291 8.69156 10.0754 8.92788 9.68619 9.08911C9.29694 9.25035 8.87974 9.33333 8.45841 9.33333C8.16675 9.33333 7.87508 9.2925 7.58341 9.21083V12.25H6.41675Z"
                     fill="#625D52"
                  />
               </svg>
               <p>5+ Years Experience</p>
            </>
         )
      else if (experience == "tenplus")
         return (
            <>
               <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     d="M7.95 9.05925C7.72075 9.916 7.7145 10.6305 7.9315 11.2028C8.33025 12.2548 9.7315 12.5575 9.7975 12.8333C9.8635 13.1093 7.9315 13.25 6.8395 13.25C5.74775 13.25 4.4085 13.0417 4.4085 12.8333C4.4085 12.625 5.6795 12.3485 6.06575 11.1833C6.29075 10.504 6.26625 9.72375 5.99175 8.843C5.92338 8.86438 5.85214 8.87517 5.7805 8.875C5.48275 8.875 5.23475 8.6925 5.18125 8.4515C4.97575 8.5865 4.71825 8.6665 4.439 8.6665C3.8365 8.6665 3.33625 8.2935 3.23725 7.803C3.15147 7.82322 3.06363 7.83338 2.9755 7.83325C2.43675 7.83325 2 7.46025 2 7C2 6.68925 2.199 6.41825 2.49425 6.275C2.3425 6.18025 2.244 6.027 2.244 5.85425C2.244 5.79425 2.25575 5.7365 2.27775 5.68275C2.1105 5.6085 2 5.48 2 5.33325C2 5.1515 2.1705 4.997 2.408 4.94C2.15925 4.7875 2 4.5535 2 4.29175C2 3.876 2.40075 3.53175 2.92475 3.4685C2.80118 3.31901 2.73301 3.13145 2.73175 2.9375C2.73175 2.41975 3.223 2 3.82925 2C3.89025 2 3.95025 2.00425 4.00875 2.0125C4.155 1.64175 4.5655 1.375 5.04875 1.375C5.183 1.375 5.3115 1.3955 5.4305 1.43325C5.513 1.04475 5.9115 0.75 6.39 0.75C6.8795 0.75 7.285 1.058 7.355 1.45925C7.53375 1.28025 7.8 1.16675 8.0975 1.16675C8.63625 1.16675 9.073 1.53975 9.073 2C9.073 2.155 9.02325 2.30025 8.937 2.42475C8.98125 2.4195 9.02675 2.41675 9.073 2.41675C9.5745 2.41675 9.988 2.74 10.0425 3.15625C10.1959 3.08017 10.365 3.04096 10.5363 3.04175C11.0752 3.04175 11.512 3.41475 11.512 3.875C11.512 4.18875 11.309 4.462 11.009 4.60425C11.309 4.74625 11.512 5.0195 11.512 5.33325C11.512 5.60575 11.3587 5.848 11.122 6C11.2135 6.1045 11.268 6.23425 11.268 6.375C11.268 6.429 11.26 6.48125 11.245 6.531C11.695 6.74425 11.9998 7.15425 11.9998 7.625C11.9998 8.31525 11.3448 8.875 10.5363 8.875C10.3346 8.8756 10.1346 8.83969 9.94575 8.769C9.72425 8.963 9.415 9.08325 9.073 9.08325C8.81139 9.08529 8.55479 9.01148 8.33425 8.87075C8.22925 8.96 8.0975 9.026 7.95 9.05925Z"
                     fill="#625D52"
                  />
               </svg>
               <p>10+ Years Experience</p>
            </>
         )
      else return null
   }

   const renderStars = rating => {
      let stars = []
      for (let i = 1; i <= 5; i++) {
         stars.push(
            <StarIcon
               key={i}
               className={`h-5 w-5 ${
                  i <= rating ? "text-yellow-500" : "text-warmgray-300"
               }`}
            />
         )
      }
      return stars
   }

   const expertiseRender = expertise => {
      if (expertise == "residential")
         return (
            <>
               <HomeModernIcon className="w-4 h-4" />
               <p>Residential</p>
            </>
         )
      else if (expertise == "renovations")
         return (
            <>
               <WrenchScrewdriverIcon className="w-4 h-4" />
               <p>Renovations</p>
            </>
         )
      else if (expertise == "commercial")
         return (
            <>
               <BuildingOffice2Icon className="w-4 h-4" />
               <p>Commercial</p>
            </>
         )
      else return null
   }

   const [modalOpen, setModalOpen] = useState(false)

   return (
      <>
         <BuilderModal
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            name={name}
            description={description}
            contact={contact}
            website={website}
            image1={image1}
            image2={image2}
            image3={image3}
         />

         <div
            onClick={() => setModalOpen(true)}
            className="col-span-6 hover:shadow-md bg-white grid rounded-md overflow-hidden border border-warmgray-200 grid-cols-6 gap-4 lg:gap-x-8"
         >
            <img
               src={`src/assets/builder-img/${image1}.webp`}
               className="col-span-3 h-60 w-full object-cover"
               alt=""
            />
            <div className="col-span-3 py-8 pr-8">
               <h2 className="text-md text-warmgray-1000">{name}</h2>
               <p className="text-sm text-warmgray-600">{location}</p>
               <div className="flex my-2 gap-2 text-warmgray-600">
                  <div className="flex">{renderStars(rating)}</div>
                  <p>
                     {reviews
                        ? reviews.length === 1
                           ? "1 review"
                           : `${reviews.length} reviews`
                        : "0 reviews"}
                  </p>
               </div>
               <p className="py-1 px-2 my-2 text-xs border text-warmgray-700 border-warmgray-700 w-min rounded-md">
                  {priceRender(price)}
               </p>
               <div className="mb-2 flex items-center gap-1 text-warmgray-700">
                  {experienceRender(experience)}
               </div>
               <div className="flex gap-2">
                  {expertise.map(each => (
                     <div
                        key={each}
                        className="flex items-center gap-1 text-warmgray-700"
                     >
                        {expertiseRender(each)}
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </>
   )
}
