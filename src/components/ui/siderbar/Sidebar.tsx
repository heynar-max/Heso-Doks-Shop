'use-client'

import Link from "next/link"
import { IoCloseOutline, IoLogInOutline, IoLogOutOutline, IoPeopleOutline, IoPersonOutline, IoSearchOutline, IoShirtOutline, IoTicketOutline } from "react-icons/io5"

export const Sidebar = () => {


    return (
        <div>

            {/* Blackground black  */}
            <div
                className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30"
            />

            {/* blur  */}
            <div 
                className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
            />

            {/* Sidemenu  */}
            <nav 
                className="fixed p-5 right-0 top-0 w-[310px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300">
                
                <IoCloseOutline
                    size={ 50 }
                    className="absolute top-5 right-5 cursor-pointer"
                    
                />

                {/* Input */ }
                <div className="relative mt-14">
                    <IoSearchOutline size={ 20 } className="absolute top-2 left-2" />
                        <input
                            type="text"
                            placeholder="Buscar"
                            className="w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-500"
                        />
                </div>

                <Link
                    href="/"
                    className="flex items-center mt-5 p-1 hover:bg-gray-100 rounded transition-all"
                    >
                    <IoPersonOutline size={ 20 } />
                    <span className="ml-3 text-xl">Perfil</span>
                    </Link>

                    <Link
                    href="/"
                    className="flex items-center mt-5 p-1 hover:bg-gray-100 rounded transition-all"
                    >
                    <IoTicketOutline size={ 20 } />
                    <span className="ml-3 text-xl">Ordenes</span>
                    </Link>

                    <Link
                    href="/"
                    className="flex items-center mt-5 p-1 hover:bg-gray-100 rounded transition-all"
                    >
                    <IoLogInOutline size={ 20 } />
                    <span className="ml-3 text-xl">Ingresar</span>
                    </Link>

                    <Link
                    href="/"
                    className="flex items-center mt-5 p-1 hover:bg-gray-100 rounded transition-all"
                    >
                    <IoLogOutOutline size={ 20 } />
                    <span className="ml-3 text-xl">Salir</span>
                    </Link>

                    {/* Line Separator */ }
                    <div className="w-full h-px bg-gray-200 my-10" />


                    <Link
                    href="/"
                    className="flex items-center mt-10 p-1 hover:bg-gray-100 rounded transition-all"
                    >
                    <IoShirtOutline size={ 20 } />
                    <span className="ml-3 text-xl">Productos</span>
                    </Link>

                    <Link
                    href="/"
                    className="flex items-center mt-5 p-1 hover:bg-gray-100 rounded transition-all"
                    >
                    <IoTicketOutline size={ 20 } />
                    <span className="ml-3 text-xl">Ordenes</span>
                    </Link>

                    <Link
                    href="/"
                    className="flex items-center mt-5 p-1 hover:bg-gray-100 rounded transition-all"
                    >
                    <IoPeopleOutline size={ 20 } />
                    <span className="ml-3 text-xl">Usuarios</span>
                    </Link>

            </nav>
        </div>
    )
}