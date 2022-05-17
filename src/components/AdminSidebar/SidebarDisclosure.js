import React from 'react'
import { Disclosure, Transition } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'
import Menu from './Menu'

function SidebarDisclosure(props) {
    return (
        <div>
            <Disclosure  >
                {({ open }) => (
                    <>
                        <Disclosure.Button className="flex items-center justify-between w-full text-left focus:outline-none hover:bg-gray-100 py-1 px-4 rounded-lg">
                            <span>{props.button}</span>
                            <ChevronUpIcon
                                className={`${!open ? 'transform rotate-180' : ''
                                    } w-5 h-5 text-admin-orange`}
                            />
                        </Disclosure.Button>
                        <Transition
                            enter="transition duration-100 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-75 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                        >
                            <Disclosure.Panel className="ml-2 mt-6 flex flex-col space-y-4">
                                {props.lists!==[] && props.lists.map((list) => (
                                    <Menu key={list.key} link={list.link} text={list.name} />
                                ))}
                            </Disclosure.Panel>
                        </Transition>
                    </>
                )}
            </Disclosure>
        </div>
    )
}

SidebarDisclosure.defaultProps = {
    lists:[]
}

export default SidebarDisclosure
