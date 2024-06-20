import {
   Description,
   Dialog,
   DialogPanel,
   DialogTitle,
   Transition,
} from "@headlessui/react"
import { XMarkIcon } from "@heroicons/react/16/solid"

export function BuilderModal({
   modalOpen,
   setModalOpen,
   name,
   description,
   contact,
   website,
   image1,
   image2,
   image3,
}) {
   console.log(name)
   return (
      <>
         <Transition
            show={modalOpen}
            enter="duration-200 ease-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="duration-300 ease-out"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
         >
            <Dialog
               onClose={() => setModalOpen(false)}
               className="relative z-50"
            >
               {/* The backdrop, rendered as a fixed sibling to the panel container */}
               <div
                  className="fixed inset-0 bg-warmgray-1000/30"
                  aria-hidden="true"
               />

               {/* Full-screen container to center the panel */}
               <div className="fixed inset-0 overflow-y-auto p-4 grid justify-center items-center">
                  {/* The actual dialog panel  */}
                  <DialogPanel className="grid grid-cols-4 gap-4 sm:grid-cols-12 lg:gap-x-8 max-w-7xl space-y-4 bg-white p-8 rounded-md border border-warmgray-300">
                     <button
                        className=" p-1 border-2 border-warmgray-300 bg-warmgray-100 rounded-full col-start-4 sm:col-start-12 place-self-end"
                        onClick={() => setModalOpen(false)}
                     >
                        <XMarkIcon className="w-8 h-8 text-warmgray-700" />
                     </button>
                     {/* Left column */}
                     <div className="col-span-4 sm:col-span-6">
                        <DialogTitle className="text-3xl sm:text-4xl mb-4 text-warmgray-1000">
                           {name}
                        </DialogTitle>
                        <div className="flex flex-col gap-2">
                           <p className="text-warmgray-600">
                              {contact ? contact : "(08) 1234 5678"}
                           </p>
                           <a
                              href={website ? website : "http://google.com/"}
                              className="text-cyan-700"
                           >
                              Website
                           </a>
                        </div>
                        <Description className="mt-8 text-warmgray-700">
                           {description}
                        </Description>
                     </div>
                     <img
                        className="col-span-4 sm:col-span-6 object-cover rounded-md w-full h-full max-h-[40vh] items-stretch"
                        src={image1}
                        alt=""
                     />
                     <img
                        className="col-span-4 sm:col-span-6 object-cover h-72 rounded-md w-full"
                        src={image2}
                        alt=""
                     />
                     <img
                        className="col-span-4 sm:col-span-6 object-cover h-72 rounded-md w-full"
                        src={image3}
                        alt=""
                     />
                  </DialogPanel>
               </div>
            </Dialog>
         </Transition>
      </>
   )
}
