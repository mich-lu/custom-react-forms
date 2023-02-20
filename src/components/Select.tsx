import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

type SelectProps = {
    label: string;
    options? : any[];
    field: any;
    error?: string;
}

const Select= ({options, field, label, error} : SelectProps) => {
  
const { onChange, value } = field;

  return (
   <div className='form-group'>
      <Listbox value={value} onChange={onChange}>
        {({ open }) => (
          <>
            <Listbox.Label className="form-label">{label}</Listbox.Label>
            <div className="relative mt-1">
              <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left focus:border-primary focus:outline-none focus:ring-primary shadow-sm sm:text-sm">
                {value  && <span className="block truncate">{value.name}</span>}
                {!value && <span className="block truncate">{label}</span>}
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {options && options.map((option, index) => (
                    <Listbox.Option
                      key={index}
                      className={() =>
                        classNames(
                          option.id === value?.id ? 'text-white bg-primary' : 'text-textColor',
                          'relative cursor-default select-none py-2 pl-3 pr-9'
                        )
                      }
                      value={option}
                    >
                      {() => (
                        <>
                          <span className={classNames(option.id == value?.id ? 'font-semibold' : 'font-normal', 'block truncate')}>
                            {option.name}
                          </span>

                          {option.id === value?.id ? (
                            <span
                              className={classNames(
                                option.id === value?.id ? 'text-white' : 'text-primary',
                                'absolute inset-y-0 right-0 flex items-center pr-4'
                              )}
                            >
                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    {error && <div className='input-field-label-error'>{error}</div>}
  </div>
  )
}

export default Select