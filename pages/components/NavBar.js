import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div>
            <header className="text-gray-600 body-font flex bg-slate-700 text-white">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center place-content-between w-full">
                    <div>
                        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                            </svg>
                            <span className="ml-3 text-xl text-white">MY SITE</span>
                        </a>
                    </div>
                    <div className='max-w-lg w-64 mx-6' style={{backgroundColor:'#FFFEFE',boxShadow:'0px 4px 10px 2px rgba(47, 128, 237, 0.2)'}}>
                        <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg  overflow-hidden">
                            <input
                                className="pl-4 peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                                type="text"
                                id="search"
                                placeholder="What should you want to learn" />
                                <div className="grid place-items-center h-full w-12 text-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div>
                        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                            <a className="mr-5 hover:text-gray-900">For Enterprise</a>
                            <a className="mr-5 hover:text-gray-900">Student</a>
                            <Link href="/components/login" className="mr-5 text-blue-600  hover:text-gray-900" >Login</Link>
                            <a className="mr-5 hover:text-gray-900">Join For Free</a>
                        </nav>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Navbar