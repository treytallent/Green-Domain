import {
   Checkbox,
   Field,
   Label,
   Menu,
   MenuButton,
   MenuItem,
   MenuItems,
} from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/16/solid"

export function Filter({ filterOptions, setFilterOptions }) {
   function modifyChecked(newValue, id) {
      // Create a deep copy of filterOptions to avoid directly mutating state
      const updatedFilterOptions = filterOptions.map(category => {
         // Map over each category to find the option that needs to be updated
         const options = category.options.map(option => {
            if (option.value === id) {
               // If the option's value matches the id, update its checked status
               return { ...option, checked: newValue }
            }
            return option
         })
         // Return the updated category with the modified options
         return { ...category, options }
      })

      // Update the state with the new filter options
      setFilterOptions(updatedFilterOptions)
   }

   return (
      <>
         {filterOptions.map(parentOption => (
            <Menu key={parentOption.id}>
               <MenuButton className="text-cyan-700 flex items-center">
                  {parentOption.label}
                  <ChevronDownIcon className="w-4 h-4" />
               </MenuButton>
               <MenuItems
                  anchor="bottom start"
                  className="bg-white border py-2 rounded-md shadow-md border-warmgray-300"
               >
                  {parentOption.options.map(childOption => (
                     <MenuItem key={childOption.value}>
                        <Field className="text-cyan-700 flex items-center gap-2 px-4 py-2">
                           <Checkbox
                              checked={childOption.checked}
                              onChange={e =>
                                 modifyChecked(e, childOption.value)
                              }
                              className="group block size-4 rounded border bg-white data-[checked]:bg-cyan-700"
                           >
                              <svg
                                 className="stroke-white opacity-0 group-data-[checked]:opacity-100"
                                 viewBox="0 0 14 14"
                                 fill="none"
                              >
                                 <path
                                    d="M3 8L6 11L11 3.5"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                 />
                              </svg>
                           </Checkbox>
                           <Label className="text-warmgray-1000">
                              {childOption.label}
                           </Label>
                        </Field>
                     </MenuItem>
                  ))}
               </MenuItems>
            </Menu>
         ))}
      </>
   )
}
