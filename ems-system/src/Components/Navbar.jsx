import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { fetchData } from '../Redux/Slices/UserSlice';
import { loginUser } from '../Redux/Slices/UserSlice';
import logo from "../images/logo.png";
import { SignOutUser } from '../Redux/Slices/SignOutSlice';

const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
]

function Navbar() {

    const email = localStorage.getItem("user")
    const dispatch = useDispatch()

    const logout = () => {
        dispatch(SignOutUser())
    }

    const User = useSelector(state => loginUser(state, email))

    const data = () => {
        dispatch(fetchData())
    }

    useEffect(() => {
        data()
    }, [])

    function goBack() {
        window.history.back();
    }

    return (
        <Disclosure as="nav" className="bg-gray-800">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 items-center justify-between">
                            <div className="flex items-center">
                                <div className="flex gap-1 flex-shrink-0"
                                    onClick={goBack}>
                                    <img

                                        className="h-8 w-8"
                                        src={logo}
                                        alt="Your Company"
                                    />
                                    <h1 className='italic font-semibold text-gray-400'>Mangement System</h1>

                                </div>

                            </div>
                            <div className="hidden md:block">
                                <div className="ml-4 flex items-center md:ml-6">
                                    <button
                                        type="button"
                                        className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                    >
                                        <span className="absolute -inset-1.5" />
                                        <span className="sr-only">View notifications</span>
                                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>

                                    <Menu as="div" className="relative ml-3">
                                        <div>
                                            <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                <span className="absolute -inset-1.5" />
                                                <span className="sr-only">Open user menu</span>
                                                <img className="object-contain h-8 w-8 rounded-full" src={User?.file} alt="" />
                                            </Menu.Button>
                                        </div>
                                        <Transition>
                                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <a
                                                    href='#'
                                                    className='bg-white block px-4 py-2 text-sm hover:text-gray-700'
                                                >
                                                    profile
                                                </a>
                                                <a
                                                    href='#'
                                                    className='bg-white block px-4 py-2 text-sm hover:text-gray-700'
                                                >
                                                    Setting
                                                </a>
                                                <a
                                                    onClick={logout}
                                                    className='bg-white block px-4 py-2 text-sm hover:text-gray-700 cursor-pointer'
                                                >
                                                    SignOut
                                                </a>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </div>
                            </div>
                            <div className="-mr-2 flex md:hidden">
                                {/* Mobile menu button */}
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="md:hidden">

                        <div className="border-t border-gray-700 pb-3 pt-4">
                            <div className="flex items-center px-5">
                                <div className="flex-shrink-0">
                                    <img className="h-10 w-10 rounded-full" src={User?.file} alt="" />
                                </div>
                                <div className="ml-3">
                                    <div className="text-base font-medium leading-none text-white">{User?.name}</div>
                                    <div className="text-sm font-medium leading-none text-gray-400">{User?.email}</div>
                                </div>
                               
                            </div>
                            <div className="mt-3 space-y-1 px-2">
                                {userNavigation.map((item) => (
                                    <Disclosure.Button
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                                    >
                                        {item.name}
                                    </Disclosure.Button>
                                ))}
                            </div>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

export default Navbar
