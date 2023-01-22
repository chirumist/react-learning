import { useState } from "react"
export const NavbarComponent = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    return (
        <div className="flex flex-rows gap-4 items-center">
            <a href="#" className="text-green-500 hover:text-green-800">Home</a>
            <a href="#" className="text-green-500 hover:text-green-800">Resturents</a>
            <a href="#" className="text-green-500 hover:text-green-800">Dishes</a>
            <a href="#" className="text-green-500 hover:text-green-800">FAQ</a>
            <a href="#" className="text-green-500 hover:text-green-800">Hep</a>
            {!isLoggedIn ? (
                <>
                    <button type="button" onClick={() => setIsLoggedIn(true)} className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded transition-all duration-300 ease-in-out shadow hover:shadow-lg focus:shadow-none">Login</button>
                    <button type="button" onClick={() => setIsLoggedIn(true)} className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded transition-all duration-300 ease-in-out shadow hover:shadow-lg focus:shadow-none">Register</button>
                </>
            ) : (
                <a href="#" onClick={() => setIsLoggedIn(false)} className="text-green-700 hover:bg-green-700 hover:text-white rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </a>
            )}
        </div>
    )
}